import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
 
import useAxionPublic from "../../hooks/useAxionPublic";
import useAuth from "../../hooks/useAuth";
import useUsersData from "../../hooks/useUsersData";
 
 
  

const CheckoutForm = ({coin,dollars}) => {
//  console.log(dollars);
  const {user} = useAuth();
 
 const [userData,refetch] = useUsersData();
 console.log(userData);
   const axiosPublic = useAxionPublic()
  const [error,setError] = useState('');
  const [transactionId,setTransactionId] = useState();
  const [clientSecrete,setClientSecrete]= useState('');
  // console.log(clientSecrete,'client secrete client side ');
  
  const stripe = useStripe();
  const elements = useElements();
 
useEffect(()=>{
  axiosPublic.post('/create-payment-intent',{coin:coin})
  .then(res => {
    console.log(res.data.clientSecret);
    setClientSecrete(res.data.clientSecret)
  })
},[coin,axiosPublic])


  const handleSubmit = async e => {
    e.preventDefault();
    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement)
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('PaymentMethod', paymentMethod);
      setError('')
    }
    // confirm payment
    const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecrete,{
      payment_method:{
        card: card ,
        billing_details:{
        email: user?.email || 'anonymous',
        name:user?.displayName || 'anonymous'
        }        
      }
    })
    if(confirmError){
      setTransactionId('')
      setError(confirmError.message)
      console.log('confirmError');
    }else{
      console.log('paymentIntent', paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id);
        // update user coin 
     const upCoin = {
      coin : coin,
      email:user?.email

     }
        axiosPublic.put('/user',upCoin)
        .then(res =>{
          refetch()
          console.log(res.data);
        })

        console.log('transaction');
// now save the payment in the database
        const payment = {
          email: user?.email,
          name: user?.displayName,
          current_date:new Date(),
          coin_purchase:coin,
          amount:dollars
        }
   
        axiosPublic.post('/payment',payment)
        .then(result => {
          console.log(result.data);
        })
        console.log(payment);
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button 
      disabled={!stripe || !clientSecrete}
       className="btn btn-primary my-4 btn-sm" type="submit"  >
        Pay
      </button>
      <p className="text-red-300">{error}</p>
      {
        transactionId && <p className="text-green-400">Your transaction id : {transactionId}</p>
      }
      </form>
    </div>
  );
};

export default CheckoutForm;