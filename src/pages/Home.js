import React, { useState, Component } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Switch from "../components/Switch";
import RangeFilter from "../components/RangeFilter";
import "../styles/filter.css";

const Home = ({ searchField }) => {
	const [values, setValues] = useState([0, 500]);
	const [checked, setChecked] = useState(false);

	return (
		<main>
			<hr />
			<div className="filters-container">
				<Switch checked={checked} setChecked={setChecked} />
				<RangeFilter values={values} setValues={setValues} />
			</div>
			<Banner />
			<Carousel searchField={searchField} values={values} checked={checked} />
		</main>
	);
};

export default Home;
