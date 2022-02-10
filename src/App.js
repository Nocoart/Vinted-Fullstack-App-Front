import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cookies from "js-cookie";

import "./styles/containers.css";
import "./styles/colors.css";

function App() {
	const [cookie, setCookie] = useState(Cookies.get("Token") || undefined);

	return (
		<div className="App">
			<Router>
				<Header setCookie={setCookie} cookie={cookie} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/offer/:id" element={<Product />} />
					<Route path="/signup" element={<Signup setCookie={setCookie} />} />
					<Route path="/login" element={<Login setCookie={setCookie} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
