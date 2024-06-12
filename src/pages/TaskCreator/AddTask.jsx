import { useContext } from "react";
import { AuthenticationContext } from "../../providers/ContextComponent";
import useUsersData from "../../hooks/useUsersData";
import useAxionPublic from "../../hooks/useAxionPublic";
import toast from "react-hot-toast";

 

const AddTask = () => {
  const [userData,refetch] = useUsersData();
  const axiosPublic = useAxionPublic();
  const {user} = useContext(AuthenticationContext)
  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const detail = form.detail.value;
    const quantity= form.quantity.value;
    const amount= form.amount.value;
    const date= form.date.value;
    const submission = form.submission.value;
    const image = form.image.value;
    const email = user?.email;
    const  name = user?.displayName;
     console.log(quantity*amount);
     const into = quantity * amount ;
     const coin = userData?.coin;
    if(into > coin ){
       alert('Not available Coin. Purchase Coin')
       return;
    }
    const crnTime = new Date().toISOString() ;
    const taskInfo = {
      title,detail,quantity,amount,date,submission,image, email, name,
      currentTime : new Date(crnTime).toLocaleString() // Convert to readable format
    };
    // post new task 
    axiosPublic.post('/task',taskInfo)
    .then(res =>{
      console.log(res.data,'inside the add component');
      const upCoin = {
        coin : into,
        email:user?.email
  
       }
      axiosPublic.put('/decreaseUserCoin',upCoin)
      .then(res => {
        console.log(res.data);
        refetch();
      })
      toast.success('Successfully toasted!')
    })
    .catch(error =>{
      console.log(error.message);
    })
    
    console.log(taskInfo);
  }
  return (
    <div>
       <div className="max-w-full mx-auto">
        <form  onSubmit={handleAddTask} className="p-5">
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
                <label htmlFor="username" className="block ">
                   Task Quantity
                </label>
                <input
                  className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter quantity"
                  type="number"
                  name="quantity"
                />
               
              
              </div>
            </div>
            {/* Right side content */}
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col space-y-1 mb-4">
                <label htmlFor="username" className="block ">
                  Completion Date
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter date"
                  type="text"
                  name="date"
                />
                <label htmlFor="username" className="block ">
                   Submission Info
                </label>
                <input
                 className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter submission"
                  type="text"
                  name="submission"
                />
                <label htmlFor="username" className="block ">
              Task Image Url
                </label>
                <input
                className="w-full px-4 py-3 rounded-md   border border-pink-400    "
                  placeholder="Enter photo URL"
                  type="text"
                  name="image"
                />
                  
              </div>
            </div>
          </div>
          {/* phot and button */}
          <div>
            <label htmlFor="username" className="block ">
              Payable Amount
            </label>
            <input
            className="w-full px-4 py-3 rounded-md   border border-pink-400    "
              type="number"
              placeholder="Enter Payable amount"
              name="amount"
            />

            <input
              className="w-full px-3 py-2  mt-2 btn rancho text-xl border   bg-pink-400 text-white"
              type="submit"
              value="Add Task"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;