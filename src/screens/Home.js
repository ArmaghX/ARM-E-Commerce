import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
		</>
	);
};

export default Home;
