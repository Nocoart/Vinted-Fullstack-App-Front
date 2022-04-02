import React from "react";

//components
import ReactLoading from "react-loading";

//style
import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <ReactLoading type={"spinningBubbles"} color={"var(--vintedGreen)"} height={500} width={100} />
    </div>
  );
};

export default Loader;
