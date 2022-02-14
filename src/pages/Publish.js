import React from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/publish.css";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!Cookies.get("token")) {
			navigate("/login");
		}
	}, []);

	return (
		<div className="publish-main">
			<div className="container1280">
				<h2>Vends ton article</h2>
				<form action="">
					<div className="file-select">
						<div className="dashed-preview-without">
							<div className="input-design-default">
								<label htmlFor="file" className="label-file">
									<span className="input-sign">+</span>
									<span>Ajouter une photo</span>
								</label>
							</div>
						</div>
					</div>
					<div className="text-input-section">
						<div className="text-input">
							<h4>Titre</h4>
							<input
								type="text"
								id="title"
								name="title"
								placeholder="ex: Chemise bleue Zara"
							/>
						</div>
						<div className="text-input">
							<h4>Décris ton article</h4>
							<textarea
								name="description"
								id="description"
								rows="5"
								placeholder="ex : portée quelque fois"
							></textarea>
						</div>
					</div>
					<div className="text-input-section">
						<div className="text-input">
							<h4>Marque</h4>
							<input
								type="text"
								id="selected-brand"
								name="selected-brand"
								placeholder="ex : Zara"
							/>
						</div>
						<div className="text-input">
							<h4>Taille</h4>
							<input
								type="text"
								id="selected-size"
								name="selected-size"
								placeholder="ex : M / 38 / 12"
							/>
						</div>
						<div className="text-input">
							<h4>Couleur</h4>
							<input
								type="text"
								id="selected-color"
								name="selected-color"
								placeholder="ex : bleue"
							/>
						</div>
						<div className="text-input">
							<h4>Etat</h4>
							<input
								type="text"
								id="selected-state"
								name="selected-state"
								placeholder="ex : Neuf"
							/>
						</div>

						<div className="text-input">
							<h4>Lieu</h4>
							<input
								type="text"
								id="selected-city"
								name="selected-city"
								placeholder="ex : Paris"
							/>
						</div>
					</div>
					<div className="text-input-section">
						<div className="text-input">
							<h4>Prix</h4>
							<div className="checkbox-section">
								<input
									type="text"
									id="price"
									name="price"
									placeholder="0,00 €"
								/>
								<div className="checkbox-input">
									<label htmlFor="exchange" className="checkbox-design"></label>
									<input type="checkbox" name="exchange" id="exchange" />
									<span>Je suis intéressé(e) par les echanges</span>
								</div>
							</div>
						</div>
					</div>
					<div className="form-btn-div">
						<button type="submit" className="form-validation">
							Ajouter
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Publish;
