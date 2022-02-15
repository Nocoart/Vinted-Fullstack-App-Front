import React from "react";

const OfferByPage = ({ setOfferByPage, setCurrentPage }) => {
	return (
		<div className="offer-by-page">
			<label htmlFor="offer-by-page-select">Nombre d'offres par page : </label>
			<select
				id="offer-by-page-select"
				onChange={(e) => {
					setOfferByPage(e.target.value);
					setCurrentPage(1);
				}}
			>
				<option value={12}>12</option>
				<option value={25}>25</option>
				<option value={50}>50</option>
			</select>
		</div>
	);
};

export default OfferByPage;
