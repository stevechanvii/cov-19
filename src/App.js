import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CardNew from './components/Cards/CardNew';
import CountryPicker from './components/CountryPicker/CountryPicker';
import MapChart from './components/MapChart/MapChart';
import { fetchCountryData, fetchGlobalData } from './api';
import coronaImage from './images/image.png';
import ReactTooltip from 'react-tooltip';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        countryData: {},
        globalData: {},
        lastUpdate: '',
        country: '',
        content: '',
    };

    async componentDidMount() {
        const covData = await fetchGlobalData();
        const covContryData = await fetchCountryData('Australia');
        this.setState({
            globalData: covData,
            lastUpdate: covData.lastUpdate,
            countryData: covContryData,
        });
        console.log('ccc');
    }

    onPickerCountryChange = async (country) => {
        // fetch the data
        try {
            const covData = await fetchCountryData(country);
            this.setState({ countryData: covData, country: country });
        } catch (error) {
            console.log(error);
        }
    };

    onMapCountryHover = (content) => {
        // console.log(content);
        this.setState({ ...this.state, content: content });
    };

    render() {
        const { countryData, globalData, country } = this.state;

        return (
            <div className={styles.container}>
                {/* <img src={coronaImage} className={styles.image} alt='COVID-19' /> */}
                <h1 className={styles.title}>COVID-19 TRACKER</h1>
                <CardNew conData={countryData} gloData={globalData} country={country} />
                {/* <Cards conData={countryData} gloData={globalData} /> */}
                {new Date(this.state.lastUpdate).toDateString()}
                <CountryPicker handleCountryChange={this.onPickerCountryChange} />
                <div className={styles.map}>
                    <MapChart
                        countryHovered={this.onMapCountryHover}
                        handleCountryChange={this.onPickerCountryChange}
                    />
                    <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
                <Chart data={countryData} country={country} />
            </div>
        );
    }
}

export default App;
