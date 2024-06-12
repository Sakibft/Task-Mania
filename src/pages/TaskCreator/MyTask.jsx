import { useContext, useEffect, useState } from "react";
import useAxionPublic from "../../hooks/useAxionPublic";
import { AuthenticationContext } from "../../providers/ContextComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
 
const MyTask = () => {
  const { user } = useContext(AuthenticationContext);
  const axiosPublic = useAxionPublic();
  // get specific tasks for current user
  const { data: myTasks, refetch } = useQuery({
    queryKey: ["myTask", user?.email],
    queryFn: () => getTasks(),
  });
  // console.log(myTasks);
  const getTasks = async () => {
    const { data } = await axiosPublic.get(`/tasks/${user?.email}`);
    return data;
  };
  // delete task
  const { mutateAsync } = useMutation({
    mutationFn: async (info) => {
      console.log(info?.id);
      const { data } = await axiosPublic.delete(`/task/${info?.id}`);
      refetch();
      console.log(data);
      axiosPublic.put('/user',info)
      .then(res => {
        console.log(res.data,'after delete task increase coin ');
        refetch();
      })
      toast.error("Delete task ");
    },
    onSuccess: () => {
      console.log("delete ❌");
    },
  });

  // delete task
  const handleDelete = (task) => {
    const amount = task?.amount;
    const quantity = task?.quantity;
    const id = task?._id;
    const email = task?.email;
    const multiply = amount * quantity;
    const upInfo = {
      id: id,
      email: email,
      coin: multiply,
    };
    mutateAsync(upInfo);
    // console.log(upInfo);
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
                <tr className="border rounded-xl  ">
                  <th>Task Title</th>
                  <th>Task Quantity</th>
                  <th>Payable Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myTasks &&
                  myTasks.map((task) => (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.quantity}</td>
                      <td>{task.amount}</td>
                      <td>
                        <Link to={`/dashboard/update/${task._id}`}>
                          <button className="border flex gap-2 py-1 px-2  text-black  font-semibold rounded-md ">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(task)}
                          className="border flex gap-2 py-1 px-2   font-semibold rounded-md border-black hover:bg-slate-300 mt-2"
                        >
                          Delete
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
    </div>
  );
};

export default MyTask;
