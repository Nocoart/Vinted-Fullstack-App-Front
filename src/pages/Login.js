import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
	const navigate = useNavigate();

	const formObj = {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(
			"https://lereacteur-vinted-api.herokuapp.com/user/login",
			formObj
		);
		Cookies.set("token", response.data.token);
		navigate("/");
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
			<Link to={"/signup"}>Tu as déja un compte? connecte-toi</Link>
		</div>
	);
};

export default Login;
