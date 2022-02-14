import React from "react";
import defaultAvatar from "../assets/img/default-avatar.svg";

const OfferDetails = ({ offer }) => {
	return (
		<div className="offer-details-container">
			<div>
				<span className="offer-price">{offer.product_price.toFixed(2)} €</span>
				<ul className="offer-list">
					{offer.product_details.map((elem, index) => {
						return (
							<li key={index}>
								<span className="offer-keys">{Object.keys(elem)} :</span>
								<span className="offer-value"> {Object.values(elem)}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<hr />
			<div className="offer-content">
				<p className="name">{offer.product_name}</p>
				<p className="description">{offer.product_description}</p>
				<div className="offer-avatar-username">
					<img
						className="offer-avatar-img"
						src={
							offer.owner.account.avatar
								? offer.owner.account.avatar.secure_url
								: defaultAvatar
						}
						alt=""
					/>
					<span>{offer.owner.account.username}</span>
				</div>
			</div>
			<button>Acheter</button>
		</div>
	);
};

export default OfferDetails;
