import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckout = ({ totalPrice, onPaymentSuccess }) => {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }], // 🔥 Передаємо правильну суму
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("PayPal payment successful:", details);
            onPaymentSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;
