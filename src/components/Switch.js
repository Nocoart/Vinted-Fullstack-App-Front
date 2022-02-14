import React, { useState } from "react";
import Switch from "react-switch";

const Switchy = ({ checked, setChecked }) => {
	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
	};

	return (
		<div className="switch-container">
			<span>trier par prix : </span>

			<Switch
				onChange={handleChange}
				checked={checked}
				className="react-switch"
				handleDiameter={20}
				height={20}
				width={40}
				offColor="#EFEFEF"
				onColor="#EFEFEF"
				uncheckedHandleIcon={<div className="switch-handle-down">⬇</div>}
				checkedHandleIcon={<div className="switch-handle-up">⬆</div>}
				uncheckedIcon={<div></div>}
				checkedIcon={<div></div>}
			/>
		</div>
	);
};

export default Switchy;
