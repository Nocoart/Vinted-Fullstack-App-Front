import React from "react";
import { Link } from "react-router-dom";

const Item = ({ image, price, brand, id, avatar, username }) => {
	return (
		<Link to={`/offer/${id}`} className="carousel-link">
			<div className="carousel-item">
				<div className="offer-avatar-username">
					<img className="offer-avatar-img" src={avatar} alt="" />
					<span>{username}</span>
				</div>
				<img className="carousel-item-image" src={image} alt="" />
				<p className="carousel-item-price">{price} €</p>
				<p className="carousel-item-brand">{brand}</p>
			</div>
		</Link>
	);
};

export default Item;
