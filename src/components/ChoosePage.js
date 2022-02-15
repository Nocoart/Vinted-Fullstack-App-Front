import React from "react";
import "../styles/choosePage.css";

const ChoosePage = ({
	setCurrentPage,
	currentPage,
	offerByPage,
	foundOfferCount,
}) => {
	const handlePageChange = (operator) => {
		if (operator === "-") setCurrentPage(currentPage - 1);
		else setCurrentPage(currentPage + 1);
	};

	return (
		<div className="page-btn-container">
			<button
				onClick={() => handlePageChange("-")}
				disabled={currentPage > 1 ? false : true}
			>
				Page précédente
			</button>
			{currentPage > 1 && (
				<button onClick={() => handlePageChange("-")} className="num-page-btn">
					{currentPage - 1}
				</button>
			)}

			<button disabled={true} className="num-page-btn current">
				{currentPage}
			</button>

			{offerByPage * currentPage < foundOfferCount && (
				<button onClick={() => handlePageChange("+")} className="num-page-btn">
					{currentPage + 1}
				</button>
			)}

			<button
				onClick={() => handlePageChange("+")}
				disabled={offerByPage * currentPage < foundOfferCount ? false : true}
			>
				Page suivante
			</button>
		</div>
	);
};

export default ChoosePage;
