import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/image/burger_king.png";

const NavBar = () => {
	return (
		<Navbar expand="lg">
			<Container className="">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link href="#home">Menu</Nav.Link>
						<Nav.Link href="#Offers">Offers</Nav.Link>
						<Nav.Link href="#Restaurants">Restaurants</Nav.Link>
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
					
					<Button href="#" className="navButton signUp ms-auto">Sign Up</Button>
					<Button href="#" className="navButton shoppingCart">$0.00</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
