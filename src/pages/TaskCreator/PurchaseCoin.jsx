import { useEffect, useState } from "react";
import useAxionPublic from "../../hooks/useAxionPublic";
import { Link } from "react-router-dom";
const PurchaseCoin = () => {
  const axiosPublic = useAxionPublic();
  const [coins, setCoins] = useState();
  useEffect(() => {
    axiosPublic.get("/purchaseCoin").then((res) => setCoins(res.data));
  }, [axiosPublic]);

  console.log(coins);
  return (
    <div>

<h1 className="font-bold text-4xl text-center mb-5 md:mt-20">Buy Now Coin</h1>

<div className="flex  justify-center items-center md:mt-[10%] mb-5 h-full ">
  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
    {coins &&
      coins.map((coin) => (
   
       <div key={coin._id}>
        <Link to={`/dashBoard/payment/${JSON.stringify(coin)}`}>
        <div
          className="card w-52   bg-base-200 border shadow-xl"
        >
         <div className="flex  p-4 justify-between  items-center  gap-x-4">
            <div className="">{coin?.Dollars}$</div>
            <div>To</div>
            <div>{coin?.Coin} Coin</div>
          </div>
        </div>
         </Link>
       </div>
      ))}
  </div>
</div>
    </div>

   
  );
};

export default PurchaseCoin;
