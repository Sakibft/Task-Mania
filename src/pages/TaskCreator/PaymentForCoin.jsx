import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentForCoin = () => {

  const { coin } = useParams(); // Retrieve coin parameter
  const coinData = JSON.parse(coin); // Parse coin back into an object
const coyen = coinData.Coin;
const dollars = coinData.Dollars;
  console.log('Coin Data:', coinData); // Log the entire coin data
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckoutForm coin={coyen} dollars={dollars}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentForCoin;