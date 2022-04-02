import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//components
import OfferCarousel from "../components/OfferCarousel";
import OfferDetails from "../components/OfferDetails";

//styles
import "../styles/offer.css";
import Loader from "../components/Loader";

const Offer = () => {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const id = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://vinted-fullstack-app.herokuapp.com/offers");
      console.log(response.data);
      setOffer(response.data.foundOffer.find((elem) => elem._id === id));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(offer);
  return (
    <div className="offer-body">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container1280">
          <div className="offer-container">
            <OfferCarousel
              pictureArr={offer.product_pictures ? offer.product_pictures : null}
              singlePicture={offer.product_image}
            />
            <OfferDetails offer={offer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
