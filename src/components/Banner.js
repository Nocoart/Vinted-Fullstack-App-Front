import React from "react";
import banner from "../assets/img/vinted-banner.jpeg";
import "../styles/banner.css";

const Banner = () => {
	return (
		<div>
			<img className="banner" src={banner} alt="" />
		</div>
	);
};

export default Banner;
