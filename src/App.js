import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import MapChart from './components/MapChart/MapChart';
import { fetchData } from './api';
import coronaImage from './images/image.png';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    };

    async componentDidMount() {
        const covData = await fetchData();
        this.setState({ data: covData });
    }

    handleCountryChange = async (country) => {
        // fetch the data
        const covData = await fetchData(country);
        this.setState({ data: covData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt='COVID-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <MapChart />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
