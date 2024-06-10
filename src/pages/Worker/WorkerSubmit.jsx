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
      <div className="container mx-auto border rounded-xl shadow-xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg text-black">
                <tr className="border rounded-xl border-b-pink-400">
                  <th>Task Title</th>
                  <th>Creator Email</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                
                 {
                  submitedTask && submitedTask.map(task => (
                    <tr key={task._id}>
                    <td>{task?.taskTitle}</td>
                    <td>{task?.creatorEmail}</td>
                    <td>{task?.amount}</td>
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