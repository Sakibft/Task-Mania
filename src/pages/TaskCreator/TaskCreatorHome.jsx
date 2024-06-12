import { useMutation, useQuery } from "@tanstack/react-query";
import { MdOutlinePendingActions } from "react-icons/md";

import useAxionPublic from "../../hooks/useAxionPublic";
import useAuth from "../../hooks/useAuth";
import { updateCurrentUser } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { FaCoins, FaDollarSign, FaOldRepublic, FaOpenid, FaPhoenixSquadron, FaUsers } from "react-icons/fa";
import useUsersData from "../../hooks/useUsersData";

const TaskCreatorHome = () => {
  const axiosPublic = useAxionPublic();
  const [userData] = useUsersData();
  const [selectedTask, setSelectedTask] = useState(null);
  const { user } = useAuth();
  const status = "Pending";
  const modalRef = useRef(null); // Create a ref for the modal

  const { data: submitedTask = [] } = useQuery({
    queryFn: async () => {
      const submitTask = await axiosPublic.get(`/submission?status=${status}`);
      return submitTask.data;
    },
    queryKey: ["submitedTask", status],
  });
  console.log(submitedTask);
  // pending task quantity
  // const penDingTaskQuantity = submitedTask.reduce((sum , quantity) => sum + quantity?.quantity, 0);
  const penDingTaskQuantity = submitedTask.reduce((sum, quantity) => sum + Number(quantity?.quantity || 0), 0);

console.log(penDingTaskQuantity);
  // Approved
  const { mutateAsync } = useMutation({
    mutationFn: async ({ info }) => {
      const approved = await axiosPublic.put("/submission", info);
      if (approved.data.modifiedCount > 0) {
        const coyen = info?.coin;
        const email = info?.email;
        const coin = parseInt(coyen);
        const upCoin = {
          coin: coin,
          email: email,
        };
        axiosPublic.put("/user", upCoin).then((res) => {
          console.log(res.data);
        });
        console.log(coin);
      }
      console.log(approved.data);
      console.log(info);
    },
  });
  const handleApproved = (task) => {
    const id = task?.taskId;
    const coin = task?.amount;
    const email = task?.workerEmail;
    const info = {
      id: id,
      coin: coin,
      email: email,

      status: "Approved",
    };
    console.log(info);
    mutateAsync({ info });
  };
  // Reject
  const { mutateAsync: RejectTask } = useMutation({
    mutationFn: async ({ info }) => {
      const approved = await axiosPublic.put("/submission", info);
      console.log(approved.data);
      console.log(info);
    },
  });
  const handleReject = (id) => {
    const info = {
      id: id,
      status: "Reject",
    };

    RejectTask({ info });
  };
  useEffect(() => {
    if (selectedTask && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [selectedTask]);
  const handleView = (task) => {
    console.log(task);
    setSelectedTask(task);
  };
  // user data for coin
  console.log(userData);
  return (
    <div>
      {/* Available coin */}
     <div className="grid md:grid-cols-2   gap-x-4 mb-5">
     <div className="stat w-72 border rounded-xl">
        <div className="stat-figure ">
          <FaCoins className="text-6xl" />
        </div>
        <div className="stat-title">Available Coin</div>
        <div className="stat-value">{userData?.coin}</div>
        <div className="stat-desc"></div>
      </div>
      {/* pending */}
     <div className="stat w-72 border rounded-xl">
        <div className="stat-figure ">
          <MdOutlinePendingActions className="text-6xl" />
        </div>
        <div className="stat-title">Pending Task Quantity</div>
        <div className="stat-value">{penDingTaskQuantity}</div>
       </div>
      {/*  */}
     
     </div>

      {selectedTask && (
        <dialog id="my_modal_2" className="modal" ref={modalRef}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedTask.taskTitle}</h3>
            <p className="py-4">Coin Needed: {selectedTask.amount}</p>
            <p className="py-4">Quantity: {selectedTask?.quantity}</p>
            <p className="py-4">
              submission_Details : {selectedTask?.submission_Details}
            </p>
            <form method="dialog" className="modal-backdrop text-black ">
              <button className="border w-12 mx-auto rounded-lg">close</button>
            </form>
          </div>
        </dialog>
      )}
      <div className="container mx-auto border rounded-xl shadow-xl ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-black">
              <tr className="border rounded-xl  ">
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>Worker Name</th>
                <th>Worker Email</th>
                <th>Submission</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submitedTask &&
                submitedTask.map((task) => (
                  <tr key={task._id}>
                    <td>{task?.taskTitle}</td>
                    <td>{task?.amount}</td>
                    <td>{task?.workerName}</td>
                    <td>{task?.workerEmail}</td>
                    <td>
                      <button className="btn" onClick={() => handleView(task)}>
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleApproved(task)}
                        className="border flex gap-2 py-1 px-2    text-black btn   font-semibold rounded-md  "
                      >
                        Approved
                      </button>

                      <button
                        onClick={() => handleReject(task?.taskId)}
                        className="border flex gap-2 py-1 px-2   font-semibold rounded-md   mt-2"
                      >
                        Reject
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
  );
};

export default TaskCreatorHome;
