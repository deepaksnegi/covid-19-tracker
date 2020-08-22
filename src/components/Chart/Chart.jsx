import React, { useState, useEffect } from "react";
import { getDailyCovidDetails } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import "../Chart/chart.css";
import { Grid, Card } from "@material-ui/core";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		getDailyCovidDetails().then((data) => setDailyData(data));
	}, [dailyData]);

	const lineChart = dailyData[0] ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: "deaths",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: true,
					},
				],
			}}
		/>
	) : null;

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "people",
						backgroundColor: [
							"rgba(255, 152, 0, 0.5)",
							"rgba(10, 182, 134, 0.5)",
							"rgba(236, 49, 75, 0.5)",
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${country}` },
			}}
		/>
	) : null;
	return (
		<Grid container className="chart__container">
			<Grid item xs={12} md={8} component={Card} className="chart__item">
				{country ? barChart : lineChart}
			</Grid>
		</Grid>
	);
};

export default Chart;
