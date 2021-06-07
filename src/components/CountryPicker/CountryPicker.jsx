import React, { useEffect, useState } from "react";
import { NativeSelect } from "@material-ui/core";
import { getCountries } from "../../api";
import "./countryPicker.css";

const CountryPicker = ({ handleCountryChange, country }) => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		getCountries().then((country) => setCountries(country));
	}, []);
	return (
		<div className="country__container">
			<select value={country} onChange={handleCountryChange}>
				<option value="">Global</option>
				{countries.map((country) => (
					<option key={country} value={country}>
						{country}
					</option>
				))}
			</select>
		</div>
	);
};

export default CountryPicker;
