import React from "react";

const OfferCarousel = ({ pictureArr }) => {
	return (
		<div>
			<div className="offer-picture-container">
				{pictureArr.map((picture, index) => {
					return <img key={index} src={picture.secure_url} alt="" />;
				})}
			</div>
		</div>
	);
};

export default OfferCarousel;
