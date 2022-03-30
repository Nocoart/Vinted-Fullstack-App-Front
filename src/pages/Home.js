import React, { useState } from "react";

//components
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Switch from "../components/Switch";
import RangeFilter from "../components/RangeFilter";
import OfferByPage from "../components/OfferByPage";

//styles
import "../styles/filter.css";

const Home = ({ searchField }) => {
  const [values, setValues] = useState([0, 500]);
  const [finalValues, setFinalValues] = useState([0, 500]);
  const [checked, setChecked] = useState(false);
  const [offerByPage, setOfferByPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main>
      <Banner />
      <hr style={{ margin: "20px 0", opacity: 0 }} />
      <div className="filters-container">
        <Switch checked={checked} setChecked={setChecked} setCurrentPage={setCurrentPage} />
        <RangeFilter
          values={values}
          setValues={setValues}
          finalValues={finalValues}
          setFinalValues={setFinalValues}
          setCurrentPage={setCurrentPage}
        />
        <OfferByPage setOfferByPage={setOfferByPage} setCurrentPage={setCurrentPage} />
      </div>

      <Carousel
        searchField={searchField}
        finalValues={finalValues}
        checked={checked}
        offerByPage={offerByPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default Home;
