import React from "react";
import logo from "../assets/img/vinted-logo.svg";
import helpIcon from "../assets/img/help-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "../styles/header.css";

const Header = () => {
	const navigate = useNavigate();
	const handleDisconnect = () => {
		Cookies.remove("token");
		navigate("/");
	};
	return (
		<header>
			<div className="container1280">
				<div className="nav-first-line">
					<Link to={`/`}>
						<img className="nav-logo" src={logo} alt="" />
					</Link>
					<div className="nav-search-bar">
						<select name="search-category" id="search-category-selec">
							<option value="Articles">Articles</option>
							<option value="Membres">Membres</option>
							<option value="Forum">Forum</option>
							<option value="Centre d'aide">Centre d'aide</option>
						</select>
						<input
							type="text"
							name="search"
							id="search-bar"
							placeholder="Rechercher des aticles"
						/>
					</div>
					{Cookies.get("token") ? (
						<button
							className="button-logout header-button"
							onClick={handleDisconnect}
						>
							Se deconecter
						</button>
					) : (
						<>
							<Link to={"/signup"}>
								<button className="button-login-signup header-button">
									S'inscrire
								</button>
							</Link>
							<Link to={"/login"}>
								<button className="button-login-signup header-button">
									Se connecter
								</button>
							</Link>
						</>
					)}

					<button className="button-sold header-button">
						Vends Maintenant
					</button>
					<img src={helpIcon} alt="" />
				</div>
			</div>
			<hr />
			<div className="container1280">
				<div className="nav-third-line">
					<a href="#">Femmes</a>
					<a href="#">Hommes</a>
					<a href="#">Enfants</a>
					<a href="#">Maison</a>
					<a href="#">À propos</a>
					<a href="#">Notre plateforme</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
