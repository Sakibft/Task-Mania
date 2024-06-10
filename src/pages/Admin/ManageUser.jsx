import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxionPublic from "../../hooks/useAxionPublic";

const ManageUser = () => {
  const { user } = useAuth();
  const axiosPublic = useAxionPublic();
  const { data: allUser, refetch } = useQuery({
    queryFn: async () => {
      const user = await axiosPublic.get("/user");
      console.log(user.data);
      return user.data;
    },
    queryKey: ["allUser"],
  });
  const {mutateAsync} = useMutation({
    mutationFn:async({id})=>{
      const data = await axiosPublic.delete(`/user/${id}`)
      console.log(data);
      console.log(id);
    },
    onSuccess:()=>{
      refetch();
    }
  })
  const handleRemove = (id) => {
    mutateAsync({id})
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
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Coin</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allUser &&
                  allUser.map((user) => (
                    <tr key={user._id}>
                      <td>
                        <img
                          className="w-12 rounded-full"
                          src={user?.photo}
                          alt=""
                        />
                      </td>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.category}</td>
                      <td>{user?.coin}</td>
                      <td>
                        <button 
                        onClick={()=>handleRemove(user?._id)}
                        className="border flex gap-2 py-1 px-2  bg-pink-400 text-white   font-semibold rounded-md border-pink-400">
                          Remove
                        </button>

                        <select className="border w-16 rounded-lg p-1 mt-2">
                          <option disabled selected>
                            Role
                          </option>
                          <option>Worker</option>
                          <option>Task Creator</option>
                          <option>Admin</option>
                          
                        </select>
                      </td>
                    </tr>
                  ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
