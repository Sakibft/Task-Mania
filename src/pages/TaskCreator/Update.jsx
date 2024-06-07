import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxionPublic from "../../hooks/useAxionPublic";
import toast from "react-hot-toast";
const Update = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxionPublic();
  const { id } = useParams();
  // get update data
  const { mutateAsync } = useMutation({
    mutationFn: async ({ upTask }) => {
      const { data } = await axiosPublic.put(`/task/update/${id}`, upTask)
      console.log(data, "haha");
    },
    onSuccess:()=>{
      navigate('/dashboard/taskCreatorMyTasks')
      toast.success('successfully update')
    }
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const detail = form.detail.value;
    const submission = form.submission.value;
    const upTask = { title, detail, submission };
    mutateAsync({ upTask });
  };
  return (
    <div>
      <div className="max-w-full mx-auto">
        <form onSubmit={handleUpdate} className="p-5">
          <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4">
            {/* left */}
            <div className="w-full sm:w-1/2 ">
              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="username" className="block ">
                  Task Title
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter task title "
                  type="text"
                  name="title"
                />
                <label htmlFor="username" className="block ">
                  Task Detail
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter task detail"
                  type="text"
                  name="detail"
                />
              </div>
            </div>
            {/* Right side content */}
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="username" className="block ">
                  Submission Info
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter submission"
                  type="text"
                  name="submission"
                />
              </div>
            </div>
          </div>
          {/* phot and button */}
          <div>
            <input
              className="w-full px-3 py-2  mt-2 btn rancho text-xl border   bg-pink-400 text-white"
              type="submit"
              value="Update Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
