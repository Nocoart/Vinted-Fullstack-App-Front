import React from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
	const [filter, setFilter] = useState();

	return (
		<main>
			<hr />
			<SearchFilter />
			<Banner />
			<Carousel />
		</main>
	);
};

export default Home;
