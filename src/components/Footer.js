import {
	MailOutline,
	Facebook,
	Instagram,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>ARM.</Logo>
				<Description>
					Our purpose at Cents of Style is to empower women to lead bold and
					full lives. We believe that if you look good, you feel good. And when
					you feel good you can do good for others around you. Cents of Style
					brings you a wide range of trendy shoes, beautiful scarves, and
					statement-making jewelry, all at affordable prices to make them
					accessible to you.{" "}
				</Description>
				<SocialContainer>
					<SocialIcon color="C13584">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Interesting Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accesories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 90 Bedford St, New York, NY
					10014
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} />
					+1 212 74 14695
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> info@arm.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
