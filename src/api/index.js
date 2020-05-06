import axios from 'axios';

/**
 * API from Mathdro
 */
const url = 'https://covid19.mathdro.id/api';

/**
 * Discard
 */
export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableUrl);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };

        // const data = await axios.get(changeableUrl);

        // return data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Fetch data by country
 * @param {String} country
 */
export const fetchCountryData = async (country) => {
    const countryUrl = `${url}/countries/${country}`;

    try {
        const {
            data: { confirmed, recovered, deaths },
        } = await axios.get(countryUrl);

        return {
            confirmed,
            recovered,
            deaths,
        };
    } catch (error) {
        console.log(error);
        return {
            error: `${country} does not have any info.`,
        };
    }
};

/**
 * Fetch global data
 */
export const fetchGlobalData = async () => {
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(url);

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
    } catch (error) {
        console.log(error);
    }
};

/**
 * Fetch global daily data
 */
export const fetchDailyData = async () => {
    try {
        console.log('fetchDailyData');
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Fetch countries
 */
export const fetchCountries = async () => {
    try {
        console.log('fetchCountries');
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};
