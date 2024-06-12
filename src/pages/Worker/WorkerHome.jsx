import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxionPublic from "../../hooks/useAxionPublic";
import { useEffect, useState } from "react";
 

 

const WorkerHome = () => {
  const {user} = useAuth();
  const [task, setTask] = useState();
console.log(task);
 
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
         <button className="btn">Total Submission : { submitedTask?.length}</button>
        
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
                {
                  submitedTask && submitedTask.map(task =>{

                    if(task.status === 'Approved'){
               
                      return (


                        <tr key={task._id}>
                        <td>{task?.taskTitle}</td>
                        <td>{task?.amount}</td>
                        <td>{task?.creatorName}</td>
                        <td>{task?.status}</td>
                      </tr>
                      )
                    }
                  }
                    )
                }
            
                  
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
    </div>
  );
};

export default WorkerHome;