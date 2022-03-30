import React from "react";
import Switch from "react-switch";

const Switchy = ({ checked, setChecked, setCurrentPage }) => {
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    setCurrentPage(1);
  };

  return (
    <div className="switch-container">
      <span>Trier par prix : </span>

      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        handleDiameter={15}
        height={15}
        width={30}
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
