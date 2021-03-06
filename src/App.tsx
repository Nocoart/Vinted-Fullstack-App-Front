import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

import "./styles/containers.css";
import "./styles/colors.css";

export interface State {
  cookie: string | undefined;
  setCookie: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchField: string;
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
}

function App() {
  const [cookie, setCookie] = useState<State["cookie"]>(Cookies.get("token") || undefined);
  const [searchField, setSearchField] = useState<State["searchField"]>("");

  return (
    <div className="App">
      <Router>
        <Header setCookie={setCookie} cookie={cookie} setSearchField={setSearchField} searchField={searchField} />
        <Routes>
          <Route path="/" element={<Home searchField={searchField} />} />
          <Route path="/offer/:id" element={<Product />} />
          <Route path="/signup" element={<Signup setCookie={setCookie} />} />
          <Route path="/login" element={<Login setCookie={setCookie} />} />
          <Route path="/publish" element={<Publish cookie={cookie} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
