import { useQuery } from "@tanstack/react-query";

import useAxionPublic from "../../hooks/useAxionPublic";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TaskList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTask } = useQuery({
    queryFn: async () => {
      const tasks = await axiosSecure.get("/tasks");

      return tasks.data;
    },
    queryKey: ["allTasks"],
  });
  console.log(allTask);
  return (
    <div className="flex border  m-2 justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {allTask &&
          allTask.map((task) => (
            <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> Title :{task?.title}</h2>
                <p>Creator Name : {task?.name}</p>
                <p>Date : {task?.date}</p>
                <p> Payable Amount : {task?.amount}</p>
                <p> Quantity : {task?.quantity}</p>
                <div className="card-actions justify-end">
                 <Link to={`/dashboard/details/${task._id}`}>
                 <button className="btn ">View Details</button>
                 </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
