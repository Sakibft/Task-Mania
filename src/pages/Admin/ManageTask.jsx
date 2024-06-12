import { useQuery } from "@tanstack/react-query";
import useAxionPublic from "../../hooks/useAxionPublic";
import { all } from "axios";
import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageTask = () => {
  // const axiosPublic = useAxionPublic();
  const axiosSecure = useAxiosSecure();
  const [selectedTask, setSelectedTask] = useState(null);
  const modalRef = useRef(null);// Create a ref for the modal
  const { data: allTask, refetch } = useQuery({
    queryFn: async () => {
      const tasks = await axiosSecure.get("/tasks");
      return tasks.data;
    },
    queryKey: ["allTask"],
  });

  const handleDelete = (id) => {
    axiosSecure.delete(`deleteTask/${id}`)
    .then((res) => {
      refetch();
      console.log(res);
    });
  };
  useEffect(() => {
    if (selectedTask && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [selectedTask]);
  const handleView = (task) => {
    setSelectedTask(task);
  };
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-center mb-2 text-2xl font-bold">My Collection</h1>
        <div className="container mx-auto border rounded-xl shadow-xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg text-black">
                <tr className="border rounded-xl border-b-pink-400">
                  <th>CreatorName</th>
                  <th>Title</th>
                  <th>Task Quantity</th>
                  <th>Coin_Needed</th>
                  <th>Availability</th>
                  <th>View Task</th>
                  <th>Delete Task</th>
                </tr>
              </thead>
              <tbody>
                {allTask &&
                  allTask.map((task) => (
                    <tr key={task._id}>
                      <td>{task?.name}</td>
                      <td>{task?.title}</td>
                      <td>{task?.quantity}</td>
                      <td>{task?.amount}</td>
                      <td></td>
                      <td>
                        <button className="btn" onClick={() => handleView(task)}>
                          View
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(task?._id)}
                          className="border flex gap-2 py-1 px-2 bg-pink-400 text-white font-semibold rounded-md border-pink-400"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>

      {selectedTask && (
        <dialog id="my_modal_2" className="modal" ref={modalRef}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedTask.title}</h3>
            <p className="py-4">{selectedTask.description}</p>
            <p className="py-4">Quantity: {selectedTask.quantity}</p>
            <p className="py-4">Coin Needed: {selectedTask.amount}</p>
            <form method="dialog" className="modal-backdrop text-black ">
              <button className="border w-12 mx-auto rounded-lg">close</button>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageTask;
