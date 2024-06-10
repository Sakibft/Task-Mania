import { useMutation, useQuery } from "@tanstack/react-query";

import useAxionPublic from "../../hooks/useAxionPublic";
import useAuth from "../../hooks/useAuth";
import { updateCurrentUser } from "firebase/auth";

const TaskCreatorHome = () => {
  const axiosPublic = useAxionPublic();
  const { user } = useAuth();
  const status = "Pending";

  const { data: submitedTask } = useQuery({
    queryFn: async () => {
      const submitTask = await axiosPublic.get(`/submission?status=${status}`);
      return submitTask.data;
    },
    queryKey: ["submitedTask", status],
  });
  console.log(submitedTask);
  // Approved
  const { mutateAsync } = useMutation({
    mutationFn: async ({ info }) => {
      const approved = await axiosPublic.put("/submission", info);
      if(approved.data.modifiedCount > 0){
        const coyen = info?.coin;
        const email = info?.email;
        const coin = parseInt(coyen)
        const upCoin = {
          coin:coin,
          email:email
        }
        axiosPublic.put('/user',upCoin)
        .then(res => {
          console.log(res.data);
        })
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
      coin:coin,
      email:email,
      
      
      status: "Approved",
    };
    console.log(info);
    mutateAsync({ info });
  };
  // Reject
  const {mutateAsync: RejectTask} = useMutation({
    mutationFn: async({info}) => {
      const approved = await axiosPublic.put("/submission", info);
      console.log(approved.data);
      console.log(info);
    }
  })
  const handleReject = (id) => {
    const info = {
      id: id,
      status: "Reject",
    };
   
    RejectTask({info})
  };
  return (
    <div>
      <div className="container mx-auto border rounded-xl shadow-xl w-[1100px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-black">
              <tr className="border rounded-xl border-b-pink-400">
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>Creator Name</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {submitedTask &&
                submitedTask.map((task) => (
                  <tr key={task._id}>
                    <td>{task?.taskTitle}</td>
                    <td>{task?.amount}</td>
                    <td>{task?.creatorName}</td>

                    <td>
                      <button
                        onClick={() => handleApproved(task)}
                        className="border flex gap-2 py-1 px-2  bg-pink-400 text-white   font-semibold rounded-md border-pink-400"
                      >
                        Approved
                      </button>

                      <button
                        onClick={() => handleReject(task?.taskId)}
                        className="border flex gap-2 py-1 px-2  text-pink-400  font-semibold rounded-md border-pink-400 mt-2"
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
