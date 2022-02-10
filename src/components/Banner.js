import React from "react";
import banner from "../assets/img/vinted-banner.jpeg";
import cut from "../assets/img/cut.svg";
import "../styles/banner.css";

const Banner = () => {
	return (
		<div className="banner">
			<img className="banner-img" src={banner} alt="" />
			<div className="banner-box">
				<h2>Prêts à faire du tri dans vos placards ?</h2>
				<button>Commencez à vendre</button>
			</div>
			<img className="banner-cut" src={cut} alt="" />
		</div>
	);
};

export default Banner;
