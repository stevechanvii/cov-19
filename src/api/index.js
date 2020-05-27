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
    const countryUrl = `${url}/countries/${country.toLowerCase()}`;

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
 * Fetch daily confirmed data by state
 */
export const fetchDailyStateData = async (country) => {
    const stateUrl = `${url}/countries/${country.toLowerCase()}/confirmed`;

    try {
        const { data } = await axios.get(stateUrl);

        const stateData = data.map((state) => ({
            provinceState: state.provinceState,
            confirmed: state.confirmed,
            recovered: state.recovered,
            deaths: state.deaths,
            date: state.lastUpdate,
        }));

        // Remove duplicate object by provinceState since it's the total, return a list of objects
        const stateDataClean = stateData.filter(
            // state -> item in stateData, index -> index of state, self -> array reference (stateData)
            (state, index, self) =>
                index === self.findIndex((t) => t.provinceState === state.provinceState)
        );

        // get the data of last 60 days
        return stateDataClean;
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
