import { useContext, useEffect, useState } from "react";
import useAxionPublic from "../../hooks/useAxionPublic";
import { AuthenticationContext } from "../../providers/ContextComponent";
import {  useMutation, useQuery } from "@tanstack/react-query";

const MyTask = () => {
  const {user} = useContext(AuthenticationContext)
  const axiosPublic = useAxionPublic();
  // get specific tasks for current user
  const {data : myTasks, refetch,} = useQuery({
    queryKey:['myTask',user?.email],
    queryFn: () => getTasks()
  })
  // console.log(myTasks);
  const getTasks = async () => {
    const {data} = await axiosPublic.get(`/tasks/${user?.email}`)
    return data ;
  }
  // delete task 
  const {mutateAsync} = useMutation({
mutationFn: async(id) => {
  const {data} = await axiosPublic.delete(`/task/${id}`)
  refetch();
  console.log(data);
  console.log(id,'hahah');
} ,

onSuccess: () => {
console.log('delete ❌');
 
}
  })
  // delete task 
  const handleDelete = id => {
    mutateAsync(id)
// console.log(id);
  }
  
 
 
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
                  <th>Task Title</th>
                  <th>Task Quantity</th>
                  <th>Payable Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  myTasks && myTasks.map(task => (
                    <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.quantity}</td>
                    <td>{task.amount}</td>
                    <td>
                      <button className="border flex gap-2 py-1 px-2  bg-pink-400 text-white   font-semibold rounded-md border-pink-400">
                        Update
                      </button>
                      <button onClick={()=>handleDelete(task._id)} className="border flex gap-2 py-1 px-2  text-pink-400  font-semibold rounded-md border-pink-400 mt-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                  ))
                }
             
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
