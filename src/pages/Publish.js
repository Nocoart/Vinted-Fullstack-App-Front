import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//assets
import deleteIcon from "../assets/img/delete.svg";
import tickIcon from "../assets/img/tick.svg";

//styles
import "../styles/publish.css";
import Loader from "../components/Loader";

const Publish = ({ cookie }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(undefined);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!cookie) {
      navigate("/login");
    }
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);
      const data = new FormData();
      data.append("picture", picture);
      data.append("title", title);
      data.append("description", description);
      data.append("brand", brand);
      data.append("size", size);
      data.append("color", color);
      data.append("state", state);
      data.append("city", city);
      data.append("price", price);
      data.append("exchange", isChecked);

      const headers = {
        headers: { authorization: `Bearer ${Cookies.get("token")}` },
      };

      const response = await axios.post("https://vinted-fullstack-app.herokuapp.com/offer/publish", data, headers);
      console.log(response.data);

      setIsLoading(false);
      navigate(`/offer/${response.data._id}`);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="publish-main">
      <div className="container1280">
        <h2>Vends ton article</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="file-select">
            {picture ? (
              <div className="dashed-preview-image">
                <img src={URL.createObjectURL(picture)} alt="" />

                <img
                  src={deleteIcon}
                  alt=""
                  className="remove-img-button"
                  onClick={() => {
                    setPicture(undefined);
                  }}
                />
              </div>
            ) : (
              <div className="dashed-preview-without">
                <div className="input-design-default">
                  <label htmlFor="file" className="label-file">
                    <span className="input-sign">+</span>
                    <span>Ajouter une photo</span>
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="input-file"
                    onChange={(e) => {
                      setPicture(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="ex: Chemise bleue Zara"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="ex : portée quelque fois"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                id="selected-brand"
                name="selected-brand"
                placeholder="ex : Zara"
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                id="selected-size"
                name="selected-size"
                placeholder="ex : M / 38 / 12"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                id="selected-color"
                name="selected-color"
                placeholder="ex : bleue"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                id="selected-state"
                name="selected-state"
                placeholder="ex : Neuf"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>

            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                id="selected-city"
                name="selected-city"
                placeholder="ex : Paris"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="0,00 €"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <div className="checkbox-input">
                  {isChecked ? (
                    <label htmlFor="exchange" className="checkbox-design-checked">
                      <img src={tickIcon} alt="" />
                    </label>
                  ) : (
                    <label htmlFor="exchange" className="checkbox-design"></label>
                  )}

                  <input type="checkbox" name="exchange" id="exchange" onChange={() => setIsChecked(!isChecked)} />
                  <span>Je suis intéressé(e) par les echanges</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn-div">
            <button type="submit" className="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
