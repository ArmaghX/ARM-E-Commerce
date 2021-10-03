import styled from "styled-components";
import PaymentForm from "./PaymentForm";

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	background-color: black;
	color: white;
	font-weight: 800;
	padding: 20px 30px;
	border-radius: 5;
	border: none;
	cursor: pointer;
`;

const Pay = () => {
	return <PaymentForm />;
};

export default Pay;
