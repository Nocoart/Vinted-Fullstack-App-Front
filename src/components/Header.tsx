import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//styles
import "../styles/header.css";

//types
import { State as Props } from "../App";

//assets
const logo = require("../assets/img/vinted-logo.svg");
const helpIcon = require("../assets/img/help-icon.svg");

const Header: React.FC<Props> = ({ setCookie, cookie, setSearchField, searchField }) => {
  const navigate = useNavigate();
  const handleDisconnect = (): void => {
    Cookies.remove("token");
    Cookies.remove("vinted-id");
    setCookie(undefined);
    navigate("/");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchField(value);
  };

  return (
    <header>
      <div className="container1280">
        <div className="nav-first-line">
          <Link to={`/`}>
            <img className="nav-logo" src={logo} alt="" />
          </Link>
          <div className="nav-search-bar">
            <select name="search-category" id="search-category-selec">
              <option value="Articles">Articles</option>
              <option value="Membres">Membres</option>
              <option value="Forum">Forum</option>
              <option value="Centre d'aide">Centre d'aide</option>
            </select>
            <input
              type="text"
              name="search"
              id="search-bar"
              placeholder="Rechercher des aticles"
              value={searchField}
              onChange={handleSearch}
            />
          </div>
          {cookie ? (
            <button className="button-logout header-button" onClick={handleDisconnect}>
              Se deconecter
            </button>
          ) : (
            <>
              <Link to={"/signup"}>
                <button className="button-login-signup header-button">S'inscrire</button>
              </Link>
              <Link to={"/login"}>
                <button className="button-login-signup header-button">Se connecter</button>
              </Link>
            </>
          )}
          <Link to={"/publish"}>
            <button className="button-sold header-button">Vends Maintenant</button>
          </Link>
          <img src={helpIcon} alt="" className="help-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
