import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import { menu, breakfastMenu } from "../../data/menu";
import "./index.css";

export default function index() {
	const [radioValue, setRadioValue] = useState("2");
	const [daytime, setDaytime] = useState(true);
	const [breakfast, setBreakfast] = useState(false);

	return (
		<div>
			<div className="upper-section text-center">
				<h1>Our Menu</h1>

				<ButtonGroup>
					<ToggleButton
						key={1}
						id={`radio-1`}
						type="radio"
						variant="outline-success"
						name="radio"
						value={radioValue}
						checked={radioValue}
						onChange={(e) => setRadioValue(e.currentTarget.value)}
						onClick={() => {
							setDaytime(!daytime);
							setBreakfast(true);
						}}
					>
						Breakfast
					</ToggleButton>
					<ToggleButton
						key={2}
						id={`radio-2`}
						type="radio"
						variant="outline-danger"
						name="radio"
						value={radioValue}
						checked={radioValue}
						onChange={(e) => setRadioValue(e.currentTarget.value)}
						onClick={() => {
							setDaytime(true);
							setBreakfast(!breakfast);
						}}
					>
						Daytime
					</ToggleButton>
				</ButtonGroup>
			</div>

			<Container>
				{daytime && (
					<div className="daytime">
						<div className="row mt-4">
							{menu.map((data) => {
								return (
									<div className="col-lg-4 mt-3">
										<Card>
											<Card.Img
												variant="top"
												src={data.img}
											/>
											<Card.Body>{data.title}</Card.Body>
										</Card>
									</div>
								);
							})}
						</div>
					</div>
				)}

				{breakfast && (
					<div className="breakfast">
						<div className="row mt-4">
							{breakfastMenu.map((data) => {
								return (
									<div className="col-lg-4 mt-3">
										<Card>
											<Card.Img
												variant="top"
												src={data.img}
											/>
											<Card.Body>{data.title}</Card.Body>
										</Card>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</Container>
		</div>
	);
}
