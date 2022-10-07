import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./index.css";

export default function index() {
	const [deliVeryMethod, setdeliVeryMethod] = useState("2");
	console.log(deliVeryMethod);
	return (
		<div>
			<div class="offer-section text-center">
				<h2>Locations</h2>
			</div>

			<Container>
				<div className="row justify-content-center my-4">
					<div className="col-lg-auto">
						<ButtonGroup>
							<ToggleButton
								key={1}
								id={`radio-1`}
								type="radio"
								variant="none"
								className="delivery"
								name="radio"
								value={deliVeryMethod}
								checked={deliVeryMethod}
								onChange={(e) =>
									setdeliVeryMethod(e.currentTarget.value)
								}
								style={{
									background: "#502314",
									color: "white",
								}}
							>
								Pick Up
							</ToggleButton>
							<ToggleButton
								key={2}
								id={`radio-2`}
								type="radio"
								variant="none"
								className="delivery"
								name="radio"
								value={deliVeryMethod}
								checked={deliVeryMethod}
								onChange={(e) =>
									setdeliVeryMethod(e.currentTarget.value)
								}
							>
								Delivery
							</ToggleButton>
						</ButtonGroup>
					</div>
					<div className="col-lg-9">
						<div className="input-group">
							<input
								className="form-control border-end-0 border search"
								type="search"
								placeholder="Your Address"
							/>
						</div>
					</div>

					<div className="mt-4">
						<Tabs id="fill-tab-example" className="mb-3" fill>
							<Tab eventKey="nearby" title="Nearby">
								<div className="text-center my-5">
									<h2>Find a Location Nearby</h2>
									<p>
										Let us know where you are so we can
										recommend nearby locations.
									</p>
									<Button variant="danger">
										Share Location
									</Button>
								</div>
							</Tab>
							<Tab eventKey="favorites" title="Favorites">
								<div className="text-center my-5">
									<h2>Sign In to Save Favorites</h2>
									<p>
										To set a favorite location, first sign
										in or sign up for an account.
									</p>
									<Button variant="danger">Sign In</Button>
								</div>
							</Tab>
							<Tab eventKey="recents" title="Recents">
								<div className="text-center my-5">
									<h2>Sign In to See Recent Locations</h2>
									<p>
										First sign in or sign up for an account.
									</p>
									<Button variant="danger">Sign In</Button>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</Container>
		</div>
	);
}
