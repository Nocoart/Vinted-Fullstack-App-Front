import React from "react";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const RangeFilter = ({ values, setValues, setCurrentPage }) => {
	const STEP = 10;
	const MIN = 0;
	const MAX = 500;

	// const [values, setValues] = useState([0, 500]);

	return (
		<div className="range-container">
			<span>Prix entre : </span>
			<Range
				values={values}
				step={STEP}
				min={MIN}
				max={MAX}
				onChange={(values) => {
					console.log(values);
					setValues(values);
					setCurrentPage(1);
				}}
				renderTrack={({ props, children }) => (
					// eslint-disable-next-line jsx-a11y/no-static-element-interactions
					<div
						onTouchStart={props.onTouchStart}
						style={{
							...props.style,
							height: "20px",
							display: "flex",
							width: "300px",
							color: "var(--vintedGreen)",
							margin: "20px auto",
						}}
					>
						<div
							ref={props.ref}
							style={{
								height: "5px",
								width: "100%",
								borderRadius: "4px",
								background: getTrackBackground({
									values,
									colors: ["#EFEFEF", "var(--vintedGreen)", "#EFEFEF"],
									min: MIN,
									max: MAX,
								}),
								alignSelf: "center",
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ index, props, isDragged }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: "15px",
							width: "15px",
							borderRadius: "50%",
							backgroundColor: "var(--vintedGreen)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							boxShadow: "0px 2px 6px #AAA",
							color: "red",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: "-22px",
								color: "#fff",
								width: "35px",
								fontSize: "12px",
								fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
								padding: "3px",
								borderRadius: "4px",
								backgroundColor: "var(--vintedGreen)",
								textAlign: "center",
								whiteSpace: "nowrap",
							}}
						>
							{values[index].toFixed(0) + " €"}
						</div>
						<div
							style={{
								backgroundColor: isDragged ? "red" : "#CCC",
							}}
						/>
					</div>
				)}
			/>
		</div>
	);
};

export default RangeFilter;
