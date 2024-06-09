import { useQuery } from "@tanstack/react-query";

import useAxionPublic from "../../hooks/useAxionPublic";

const TaskList = () => {
  const axiosPublic = useAxionPublic();
  const { data: allTask } = useQuery({
    queryFn: async () => {
      const tasks = await axiosPublic.get("/tasks");

      return tasks.data;
    },
    queryKey: ["allTasks"],
  });
  console.log(allTask);
  return (
    <div className="flex border border-black m-2 justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
        {allTask &&
          allTask.map((task) => (
            <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{task?.title}</h2>
                <p>{task?.name}</p>
                <p>{task?.date}</p>
                <p>{task?.amount}</p>
                <p>{task?.quantity}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
