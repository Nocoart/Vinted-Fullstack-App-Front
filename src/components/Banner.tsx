import React from "react";
import { Link } from "react-router-dom";

//assets
const banner = require("../assets/img/vinted-banner.jpeg");
const cut = require("../assets/img/cut.svg");

//styles
import "../styles/banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={banner} alt="" />
      <div className="banner-box">
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <Link to="/publish">
          <button>Commencez à vendre</button>
        </Link>
      </div>
      <img className="banner-cut" src={cut} alt="" />
    </div>
  );
};

export default Banner;
