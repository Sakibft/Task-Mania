import React from 'react';
import useAxionPublic from '../../hooks/useAxionPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {
  const {user} = useAuth();
const axiosPublic = useAxionPublic();
const {data:payment} = useQuery({
queryFn:async()=>{
const result = await axiosPublic.get(`/payment/${user?.email}`)
 return result.data;
},
  queryKey:['paymentData']
})
console.log(payment);
  return (
    <div>
       <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="text-center mb-2 text-2xl font-bold">Payment History</h1>
        <div className="container mx-auto border rounded-xl shadow-xl">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-lg text-black">
                <tr className="border rounded-xl border-b-pink-400">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Amount $</th>
                  <th>Purchase Coin</th>
                  <th>Current Time</th>
                </tr>
              </thead>
              <tbody>
            {
              payment && payment.map(pmnt => (
                <tr key={pmnt._id}>
                <td>{pmnt?.name}</td>
                <td>{pmnt?.email}</td>
                <td>{pmnt?.amount} & </td>
                <td>{pmnt?.coin_purchase}</td>
                <td>{pmnt?.current_date}</td>
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

export default PaymentHistory;