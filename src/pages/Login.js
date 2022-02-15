import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ setCookie }) => {
	const navigate = useNavigate();

	const formObj = {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(
			"https://lereacteur-vinted-api.herokuapp.com/user/login",
			formObj
		);
		console.log(response.data);
		Cookies.set("token", response.data.token);
		setCookie(response.data.token);
		Cookies.set("vinted-id", response.data._id);

		navigate("/publish");
	};
	return (
		<div className="signup-container">
			<h2>Se connecter</h2>
			<form onSubmit={handleSubmit} className="signup-form">
				<input
					type="email"
					placeholder="Adresse email"
					required="required"
					onChange={(e) => {
						formObj.email = e.target.value;
					}}
				/>
				<input
					type="password"
					placeholder="Mot de passe"
					required="required"
					onChange={(e) => {
						formObj.password = e.target.value;
					}}
				/>

				<button type="submit">Se connecter</button>
			</form>
			<Link to={"/signup"}>Pas encore de compte? Inscris-toi !</Link>
		</div>
	);
};

export default Login;
