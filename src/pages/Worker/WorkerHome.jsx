import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxionPublic from "../../hooks/useAxionPublic";
import { useEffect, useState } from "react";
import { FaCoins, FaDollarSign, FaUsers } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import useUsersData from "../../hooks/useUsersData";

const WorkerHome = () => {
  const { user } = useAuth();
 
  const [task, setTask] = useState();
  // console.log(task);
  const [userData] = useUsersData();
  // console.log(userData);
   const axiosPublic = useAxionPublic();

  const { data: submitedTask } = useQuery({
    queryFn: async () => {
      const submitTask = await axiosPublic.get(`/submission/${user.email}`);
      return submitTask.data;
    },
    queryKey: ["submetedTask", user],
  });
 

 

  // console.log(submitedTask);

  return (
    <div>
      <div className="container mx-auto border rounded-xl shadow-xl w-[1100px]">
        <div>

        <div className="grid md:grid-cols-3 gap-x-2  mt-1 mb-1 ">
          {/* user */}
          <div className="stat w-56 border rounded-xl">
            <div className="stat-figure ">
               <IoCheckmarkDoneSharp className="text-6xl" />

            </div>
            <div className="stat-title">Total submission</div>
            <div className="stat-value">{submitedTask?.length}</div>
          </div>
          {/* total Coin */}
          <div className="stat w-56 border rounded-xl">
            <div className="stat-figure ">
              <FaCoins className="text-6xl" />
            </div>
            <div className="stat-title">Available Coin </div>
            <div className="stat-value">{userData?.coin}</div>
            <div className="stat-desc"></div>
          </div>
          {/* payment */}
          <div className="stat w-56 border rounded-xl">
            <div className="stat-figure ">
              <FaDollarSign className="text-6xl" />
            </div>
            <div className="stat-title">Total Earning</div>
            <div className="stat-value">0</div>
          </div>
        </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-black">
              <tr className="border rounded-xl  ">
                <th>Task Title</th>
                <th>Payable Amount</th>
                <th>Creator Name</th>
                <th> Status</th>
              </tr>
            </thead>
            <tbody>
              {submitedTask &&
                submitedTask.map((task) => {
                  if (task.status === "Approved") {
                    return (
                      <tr key={task._id}>
                        <td>{task?.taskTitle}</td>
                        <td>{task?.amount}</td>
                        <td>{task?.creatorName}</td>
                        <td>{task?.status}</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
