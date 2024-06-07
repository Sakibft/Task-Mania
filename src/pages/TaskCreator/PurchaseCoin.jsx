import { useEffect, useState } from "react";
import useAxionPublic from "../../hooks/useAxionPublic";

const PurchaseCoin = () => {
  const axiosPublic = useAxionPublic();
  const [coins,setCoins] = useState();
  useEffect(()=>{
    // fetch('/purchaseCoin.json')
    // .then(res => res.json())
    // .then(data => setCoins(data))
    axiosPublic.get('/purchaseCoin')
    .then(res => setCoins(res.data))

  },[axiosPublic])
   
  console.log(coins);
  return (
    <div className="flex justify-center items-center  h-full ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
      {
        coins && coins.map(coin => (
          <div key={coin._id} className="card w-52   bg-base-200 border shadow-xl">
          <div className="flex  p-4 justify-between  items-center  gap-x-4">
            <div className="w-20">{coin?.Dollars}$</div>
            <div>{coin?.Coin}</div>
          </div>
        </div> 
        ))
      }
    
     
     
    </div>
    </div>
  );
};

export default PurchaseCoin;
