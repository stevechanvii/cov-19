import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import StateChart from './components/Chart/StateChart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import CountryFlagPicker from './components/CountryFlagPicker/CountryFlagPicker';
import Table from './components/Table/Table';
import StateTable from './components/Table/StateTable';
import MapChart from './components/MapChart/MapChart';
import { fetchCountryData, fetchGlobalData } from './api';
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
        console.log('componentDidMount');
    }

    onPickerCountryChange = async (country) => {
        // fetch the data
        let countrySelected = country;
        try {
            console.log(country);
            if (country === 'United States of America') {
                countrySelected = 'USA';
            }
            const covData = await fetchCountryData(countrySelected);
            if (!covData.error) {
                this.setState({ countryData: covData, country: countrySelected });
            }
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
                <h1 className={styles.title}>COVID-19 TRACKER</h1>
                <Cards conData={countryData} gloData={globalData} country={country} />
                <CountryFlagPicker
                    countrySelected={country}
                    handleCountryChange={this.onPickerCountryChange}
                />
                <CountryPicker handleCountryChange={this.onPickerCountryChange} />
                <div className={styles.map}>
                    <MapChart
                        countryHovered={this.onMapCountryHover}
                        handleCountryChange={this.onPickerCountryChange}
                    />
                    <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
                <Chart data={countryData} country={country} />
                <Table country={country} />
                <StateChart country={country} />
                <StateTable country={country} />
                <p className={styles.footer}>
                    Developed by <a href='https://github.com/stevechanvii/cov-19'>Steve Chan</a> |
                    Data Source from{' '}
                    <a href='https://github.com/mathdroid/covid-19-api'>Mathdro API</a>
                </p>
            </div>
        );
    }
}

export default App;
