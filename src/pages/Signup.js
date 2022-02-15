import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import deleteIcon from "../assets/img/delete.svg";

import "../styles/signup.css";

const Signup = ({ setCookie }) => {
	const navigate = useNavigate();
	const formObj = { newsletter: false };

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const response = await axios.post(
				"https://lereacteur-vinted-api.herokuapp.com/user/signup",
				// "https://vinted-fullstack-app.herokuapp.com/user/signup",
				formObj
			);
			console.log("response ->", response);
			console.log(response.data.token);
			Cookies.set("token", response.data.token);
			setCookie(response.data.token);
			Cookies.set("vinted-id", response.data._id);

			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	const [avatar, setAvatar] = useState();

	return (
		<div className="signup-container">
			<h2>S'inscrire</h2>
			<form action="" className="signup-form" onSubmit={handleSubmit}>
				<div className="file-select">
					{avatar ? (
						<div className="dashed-preview-image">
							<img src={URL.createObjectURL(avatar)} alt="" />

							<img
								src={deleteIcon}
								alt=""
								className="remove-img-button"
								onClick={() => {
									setAvatar(undefined);
								}}
							/>
						</div>
					) : (
						<div className="dashed-preview-without">
							<div className="input-design-default">
								<label htmlFor="avatar-file" className="label-file">
									<span className="input-sign">+</span>
									<span>Ajouter une photo</span>
								</label>
								<input
									type="file"
									name="file"
									id="avatar-file"
									className="input-file"
									onChange={(e) => {
										setAvatar(e.target.files[0]);
									}}
								/>
							</div>
						</div>
					)}
				</div>
				<input
					type="text"
					placeholder="Nom d'utilisateur"
					required="required"
					onChange={(e) => {
						formObj.username = e.target.value;
					}}
				/>
				<input
					type="email"
					placeholder="Email"
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
				<div className="checkbox-container">
					<div>
						<input
							type="checkbox"
							onChange={(e) => {
								formObj.newsletter = true;
							}}
						/>
						<span>S'inscrire à notre newsletter</span>
					</div>
					<p>
						En m'inscrivant je confirme avoir lu et accepté les Termes et
						Conditions et Politique de Confidentialité de Vinted. Je confirme
						avoir au moins 18 ans.
					</p>
				</div>

				<button type="submit">S'inscrire</button>
			</form>
			<Link to={"/login"}>Tu as déja un compte? connecte-toi</Link>
		</div>
	);
};

export default Signup;
