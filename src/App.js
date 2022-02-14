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
import Publish from "./pages/Publish";

function App() {
	const [cookie, setCookie] = useState(Cookies.get("Token") || undefined);
	const [searchField, setSearchField] = useState("");

	return (
		<div className="App">
			<Router>
				<Header
					setCookie={setCookie}
					cookie={cookie}
					setSearchField={setSearchField}
					searchField={searchField}
				/>
				<Routes>
					<Route path="/" element={<Home searchField={searchField} />} />
					<Route path="/offer/:id" element={<Product />} />
					<Route path="/signup" element={<Signup setCookie={setCookie} />} />
					<Route path="/login" element={<Login setCookie={setCookie} />} />
					<Route path="/publish" element={<Publish cookie={cookie} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
