import React from "react";
import "../styles/choosePage.css";

const ChoosePage = ({
	setCurrentPage,
	currentPage,
	offerByPage,
	foundOfferCount,
}) => {
	const handlePageChange = (operator) => {
		if (operator === "-2") setCurrentPage(currentPage - 2);
		else if (operator === "-1") setCurrentPage(currentPage - 1);
		else if (operator === "+1") setCurrentPage(currentPage + 1);
		else if (operator === "+2") setCurrentPage(currentPage + 2);
	};

	return (
		<div className="page-btn-container">
			<button
				onClick={() => handlePageChange("-1")}
				disabled={currentPage > 1 ? false : true}
			>
				Page précédente
			</button>

			{offerByPage * currentPage > foundOfferCount &&
			foundOfferCount > offerByPage * 2 ? (
				<button onClick={() => handlePageChange("-2")} className="num-page-btn">
					{currentPage - 2}
				</button>
			) : null}

			{currentPage > 1 && (
				<button onClick={() => handlePageChange("-1")} className="num-page-btn">
					{currentPage - 1}
				</button>
			)}

			<button disabled={true} className="num-page-btn current">
				{currentPage}
			</button>

			{offerByPage * currentPage < foundOfferCount && (
				<button onClick={() => handlePageChange("+1")} className="num-page-btn">
					{currentPage + 1}
				</button>
			)}

			{currentPage <= 1 && foundOfferCount > offerByPage * 2 ? (
				<button onClick={() => handlePageChange("+2")} className="num-page-btn">
					{currentPage + 2}
				</button>
			) : null}

			<button
				onClick={() => handlePageChange("+1")}
				disabled={offerByPage * currentPage < foundOfferCount ? false : true}
			>
				Page suivante
			</button>
		</div>
	);
};

export default ChoosePage;
