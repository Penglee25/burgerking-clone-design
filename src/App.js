import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Footer from "./components/Common/Footer/Footer";
import NavBar from "./components/Common/NavBar/NavBar";
import Menu from "./pages/Menu/Menu";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Menu />
			<Footer/>
		</div>
	);
}

export default App;
