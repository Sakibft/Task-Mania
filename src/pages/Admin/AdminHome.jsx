import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import {FaCoins, FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  // total user
  const { data = [] } = useQuery({
    queryFn: async () => {
      const userData = await axiosSecure.get("/user");
      // console.log(userData.data);
      return userData.data;
    },
  });
  const totalCoin = data.reduce((sum, data) => sum + data.coin, 0);
  console.log(totalCoin);

  console.log(data);
  //  total payment
  const { data: payment = [] } = useQuery({
    queryFn: async () => {
      const payment = await axiosSecure.get("/payment");
      // console.log(payment.data,);
      return payment.data;
    },
    queryKey: ["allpymentData", axiosSecure],
  });
  const totalAmount = payment.reduce((sum, payment) => sum + payment.amount, 0);
  // console.log(totalAmount, "total amount");

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-2  mt-2">
        {/* user */}
        <div className="stat w-52 border rounded-xl">
          <div className="stat-figure ">
            <FaUsers className="text-6xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{data?.length + 1}</div>
         </div>
        {/* total Coin */}
        <div className="stat w-52 border rounded-xl">
          <div className="stat-figure ">
            <FaCoins className="text-6xl" />
          </div>
          <div className="stat-title">Total Coin </div>
          <div className="stat-value">{totalCoin}</div>
          <div className="stat-desc"></div>
        </div>
        {/* payment */}
        <div className="stat w-52 border rounded-xl">
          <div className="stat-figure ">
            <FaDollarSign className="text-6xl" />
          </div>
          <div className="stat-title">Total Payment</div>
          <div className="stat-value">{totalAmount}</div>
         </div>
      </div>
    </div>
  );
};

export default AdminHome;
