import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import "./card.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "loading...";
	}

	return (
		<div>
			<Grid container className="card__container">
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className="card__item infected"
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5" className="infected__text">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.75}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className="card__item recovered"
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5" className="recovered__text">
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.75}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of recovered cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					xs={12}
					md={3}
					component={Card}
					className="card__item deaths"
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5" className="deaths__text">
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.75}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of deaths cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
