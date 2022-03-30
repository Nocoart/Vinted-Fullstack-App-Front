import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//assets
import deleteIcon from "../assets/img/delete.svg";

//styles
import "../styles/signup.css";

const Signup = ({ setCookie }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [avatar, setAvatar] = useState();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("newsLetter", newsLetter);
      data.append("picture", avatar);

      const response = await axios.post("https://vinted-fullstack-app.herokuapp.com/user/signup", data);
      console.log("response ->", response);
      console.log(response.data.token);
      Cookies.set("token", response.data.token);
      setCookie(response.data.token);
      Cookies.set("vinted-id", response.data._id);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form action="" className="signup-form" onSubmit={handleSubmit}>
        <div className="file-select">
          {avatar ? (
            <div className="dashed-preview-image">
              <img src={URL.createObjectURL(avatar)} alt="" style={{ maxWidth: "200px", objectFit: "cover" }} />

              <img
                src={deleteIcon}
                alt=""
                className="remove-img-button"
                onClick={() => {
                  setAvatar(undefined);
                }}
              />
            </div>
          ) : (
            <div className="dashed-preview-without">
              <div className="input-design-default">
                <label htmlFor="avatar-file" className="label-file">
                  <span className="input-sign">+</span>
                  <span>Ajouter une photo</span>
                </label>
                <input
                  type="file"
                  name="file"
                  id="avatar-file"
                  className="input-file"
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          required="required"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required="required"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required="required"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="checkbox-container">
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                setNewsLetter(!newsLetter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes et Conditions et Politique de Confidentialité de
            Vinted. Je confirme avoir au moins 18 ans.
          </p>
        </div>

        <button type="submit">S'inscrire</button>
      </form>
      <Link to={"/login"}>Tu as déja un compte? connecte-toi</Link>
    </div>
  );
};

export default Signup;
