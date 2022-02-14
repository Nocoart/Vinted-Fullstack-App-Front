import React from "react";

const OfferCarousel = ({ pictureArr, singlePicture }) => {
	return (
		<div>
			<div className="offer-picture-container">
				{pictureArr.length > 0 ? (
					pictureArr.map((picture, index) => {
						return <img key={index} src={picture.secure_url} alt="" />;
					})
				) : (
					<img src={singlePicture.secure_url} alt="" />
				)}
			</div>
		</div>
	);
};

export default OfferCarousel;
