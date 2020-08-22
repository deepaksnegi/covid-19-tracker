import React, { useEffect, useState } from "react";
import "./App.css";
import { getCovidDetails } from "./api";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import image from "./images/image.png";

function App() {
	const [data, setData] = useState({});

	const [country, setCountry] = useState("");

	useEffect(() => {
		getCovidDetails().then((data) => setData(data));

		// const fetchCovidDetails = async () => {
		// 	setData(await getCovidDetails());
		// };
		// fetchCovidDetails();
	}, []);

	const handleCountryChange = (e) => {
		const country = e.target.value;
		setCountry(country);
		getCovidDetails(country).then((data) => setData(data));
	};
	return (
		<div className="container">
			<img src={image} alt="covid-19" />
			<CountryPicker
				country={country}
				handleCountryChange={handleCountryChange}
			/>
			<Cards data={data} />
			<Chart data={data} country={country} />
		</div>
	);
}

export default App;
