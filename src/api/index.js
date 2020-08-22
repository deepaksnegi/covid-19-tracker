import axios from "axios";
const covidApi = "https://covid19.mathdro.id/api";

export const getCovidDetails = async (country = "") => {
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(
			country ? `${covidApi}/countries/${country}` : covidApi
		);
		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log(error);
	}
};

export const getDailyCovidDetails = async () => {
	try {
		const { data } = await axios.get(`${covidApi}/daily`);

		return data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
	} catch (error) {
		console.log(error);
	}
};

export const getCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${covidApi}/countries`);
		return countries.map((country) => country.name);
	} catch (error) {
		console.log(error);
	}
};
