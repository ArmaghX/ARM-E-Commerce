import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Product from "./screens/Product";
import Home from "./screens/Home";
import ProductList from "./screens/ProductList";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Cart from "./screens/Cart";
import Success from "./screens/Success";
import PaymentForm from "./screens/PaymentForm";
import StripeContainer from "./components/StripeContainer";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/pay">
					<StripeContainer />
				</Route>
				<Route path="/success">
					<Success />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
