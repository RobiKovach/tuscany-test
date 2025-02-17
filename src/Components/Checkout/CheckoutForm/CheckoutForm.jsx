import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ totalPrice, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch(
      "http://localhost:5000/api/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      }
    );

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: { card: elements.getElement(CardElement) },
      }
    );

    if (error) {
      console.error("Payment error:", error);
    } else {
      console.log("Payment successful:", paymentIntent);
      onPaymentSuccess(paymentIntent);
    }
  };

  return (
    <form className="pay-form" onSubmit={handleSubmit}>
      <CardElement />
      <button className="pay-btn" type="submit">
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
