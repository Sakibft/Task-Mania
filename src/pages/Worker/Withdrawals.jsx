import { useEffect, useState } from "react";
import CheckoutForm from "../TaskCreator/CheckoutForm";

 

const Withdrawals = () => {
  const [coins, setCoins] = useState(300); // Example available coins
  const [withdrawCoins, setWithdrawCoins] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
      setWithdrawAmount(withdrawCoins / 20);
  }, [withdrawCoins]);

  const handleWithdraw = () => {
      if (withdrawCoins > coins) {
          alert('Requested amount exceeds available coins');
          return;
      }
      // Insert the withdrawal information into the database
      const withdrawalData = {
          worker_email: 'example@example.com', // Replace with actual worker email
          worker_name: 'John Doe', // Replace with actual worker name
          withdraw_coin: withdrawCoins,
          withdraw_amount: withdrawAmount,
          payment_system: paymentSystem,
          withdraw_time: new Date(),
      };
      // Send withdrawalData to the server to insert into withdrawCollection
      console.log('Withdrawal Request:', withdrawalData);
  };
  return (
    <div>
       <div>
            <h2>Withdrawals</h2>
            <p>Maximum Withdrawal Amount: ${coins / 20}</p>
           
               
            <form onSubmit={(e) => { e.preventDefault(); handleWithdraw(); }}>
            <div className="flex flex-col space-y-1 mb-4">

            <label htmlFor="username" className="block ">
                    Coin To Withdraw:
                    </label>
                    <input
                    className="w-1/2 px-4 py-3 rounded-md   border border-pink-400  "
                        type="number"
                        value={withdrawCoins}
                        onChange={(e) => setWithdrawCoins(Number(e.target.value))}
                    />
             
   
                <label htmlFor="username" className="block ">
                    Withdraw Amount (in dollars):
                    </label>
                    <input
                    className="w-1/2 px-4 py-3 rounded-md   border border-pink-400  "
                        type="number"
                        value={withdrawAmount}
                        readOnly
                    />
         
        
                <label htmlFor="username" className="block ">
                    Select Payment System:
                    </label>
                    <select
                     className="w-1/2 px-4 py-3 rounded-md   border border-pink-400  "
                    value={paymentSystem} onChange={(e) => setPaymentSystem(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Rocket">Rocket</option>
                        <option value="Nagad">Nagad</option>
                    </select>
              
                
                <label htmlFor="username" className="block ">
                    Account Number:
                    </label>
                    <input
                     className="w-1/2 px-4 py-3 rounded-md   border border-pink-400  "
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                
            </div>
              
                <button className="btn bg-pink-300" type="submit">Withdraw</button>
            </form>
       
        </div>
    </div>
  );
};

export default Withdrawals;