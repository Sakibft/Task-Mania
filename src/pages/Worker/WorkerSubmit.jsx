import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxionPublic from "../../hooks/useAxionPublic";

const WorkerSubmit = () => {
  const {user} = useAuth();
  const axiosPublic = useAxionPublic();
  const {data:submitedTask} = useQuery({
    queryFn:async()=>{
      const submitTask = await axiosPublic.get(`/submission/${user.email}`) 
      return submitTask.data ;
    },
    queryKey:['submetedTask', user ]
  })
  console.log(submitedTask);
  return (
    <div>
      <div className="container mx-auto border rounded-xl shadow-xl w-[1100px]">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg text-black">
                <tr className="border rounded-xl border-b-pink-400">
                  <th></th>
                  <th>Task Title</th>
                  <th>Creator Name</th>
                  <th>Creator Email</th>
                  <th> Worker Name</th>
                  <th> Worker Email
                  </th>
                  <th>Detail</th>
                  <th>Amount</th>
                  <th>date</th>
                  <th>Current Date</th>
                  <th>Task Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                
                 {
                  submitedTask && submitedTask.map(task => (
                    <tr key={task._id}>
                    <td>{task?.image}</td>
                    <td>{task?.taskTitle}</td>
                    <td>{task?.creatorName}</td>
                    <td>{task?.creatorEmail}</td>
                    <td>{task?.workerName}</td>
                    <td>{task?.workerEmail}</td>
                    <td>{task?.detail}</td>
                    <td>{task?.amount}</td>
                    <td>{task?.date}</td>
                    <td>{task?.currentDate}</td>
                    <td>{task?.taskId}</td>
                    <td>{task?.status}...</td>
                   </tr>
                  ))
                 }
                  
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
    </div>
  );
};

export default WorkerSubmit;