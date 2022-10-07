import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/image/burger_king.png";

const NavBar = () => {
	const location = useLocation();

	switch (location.pathname) {
		case "/menu":
			document.title = "Main menu - Burger King";
			break;
		case "/offers":
			document.title = "Offers - Burger King";
			break;
		case "/restaurants":
			document.title = "Restaurants - Burger King";
			break;
		default:
			break;
	}

	return (
		<Navbar expand="lg">
			<Container className="">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link
							href="/menu"
							className={
								location.pathname === "/menu" && "active"
							}
						>
							Menu
						</Nav.Link>
						<Nav.Link
							href="/offers"
							className={
								location.pathname === "/offers" && "active"
							}
						>
							Offers
						</Nav.Link>
						<Nav.Link
							href="/restaurants"
							className={
								location.pathname === "/restaurants" && "active"
							}
						>
							Restaurants
						</Nav.Link>
						<Nav.Link href="#Careers">Careers</Nav.Link>
						<Nav.Link href="#Rewards">Rewards</Nav.Link>
						<Nav.Link href="#More">More</Nav.Link>
					</Nav>

					<Nav.Link href="#Location">
						<img src={logo} className="logo" alt="logo" />
						<GeoAltFill />
						<span>For item availability</span>
						<span className="mx-2" style={{ fontSize: "14px" }}>
							<u>Choose your location</u>
						</span>
					</Nav.Link>

					<Button href="#" className="navButton signUp ms-auto">
						Sign Up
					</Button>
					<Button href="#" className="navButton shoppingCart">
						$0.00
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
