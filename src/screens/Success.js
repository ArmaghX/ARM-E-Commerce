import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.h1`
	margin-bottom: 20px;
	font-size: 50px;
`;

const Title = styled.span`
	margin-bottom: 20px;
	font-size: 30px;
	background-color: #a5f0cc;
	padding: 10px 30px;
	border-radius: 5;
`;

const Description = styled.p`
	margin-bottom: 20px;
	font-size: 20px;
`;

const Success = (props) => {
	const location = useLocation();
	useEffect(() => {
		console.log(location.data);
	}, [location]);
	return (
		<Container>
			<Logo>ARM.</Logo>
			<Title>Successful</Title>
			<Description>
				Your order is being prepared. Thank you for shopping at ARM.
			</Description>
		</Container>
	);
};

export default Success;
