import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../screens/PaymentForm";

const publishableKey =
	"pk_test_51JbpkiHT7jLXkwcjUD0ARul8TADMSlDkeGMxp0oNUrZFqYoYjTwjR8fQQNirI4Jcbkk7MDK2II6ixisrulKXG83o00NDnbyZdO";
const stripePromise = loadStripe(publishableKey);

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	);
};

export default StripeContainer;
