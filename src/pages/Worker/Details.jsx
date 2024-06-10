import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useAxionPublic from "../../hooks/useAxionPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosPublic = useAxionPublic();
  const { data: taskDetail } = useQuery({
    queryFn: async () => {
      const detail = await axiosPublic.get(`/task/${id}`);
      console.log(detail.data);
      return detail.data;
    },
    queryKey: ["detailTask", id],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const submission_Details = e.target.submission.value;
    const image = taskDetail?.image;
    const taskTitle = taskDetail?.title;
    const creatorName = taskDetail?.name;
    const creatorEmail = taskDetail?.email;
    const workerEmail = user?.email;
    const workerName = user?.displayName;
    const date = taskDetail?.date;
    const amount = taskDetail?.amount;
    const currentDate = taskDetail?.currentTime;
    const detail = taskDetail?.detail;
    const taskId = taskDetail?._id;
    const status = "Pending";
    const submissionIfo = {
      image,taskTitle,creatorName,creatorEmail,workerName,workerEmail,date,amount,currentDate,detail,taskId,status,submission_Details
    }
  
      axiosPublic.post('/submission',submissionIfo)
      .then(res => {
        console.log(res.data);
      })
  console.log(submissionIfo);
  };
  console.log(taskDetail);
  console.log(id);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <img src={taskDetail?.image} alt="task image" />
          <h2 className="card-title">{taskDetail?.title}</h2>
          <p>{taskDetail?.name}</p>
          <p>Email : {taskDetail?.email}</p>
          <p> End date : {taskDetail?.date}</p>
          <p>current time : {taskDetail?.currentTime}</p>
          <p>Amount : {taskDetail?.amount}</p>
          <p>Quantity : {taskDetail?.quantity}</p>
          <p>detail : {taskDetail?.detail}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="submission_Details"
          name="submission"
          className="textarea textarea-bordered textarea-md w-full  h-24"
        ></input>
        <input className="btn" value="submit" type="submit"></input>
      </form>
    </div>
  );
};

export default Details;
