import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./pages/Menu/Menu";
import Offers from "./pages/Offers/Offers";
import Restaurants from "./pages/Restaurants/Restaurants";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/restaurants" element={<Restaurants />} />
			</Routes>
		</div>
	);
}

export default App;
