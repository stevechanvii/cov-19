import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import MapChart from './components/MapChart/MapChart';
import { fetchData } from './api';
import coronaImage from './images/image.png';
import ReactTooltip from 'react-tooltip';

import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: '',
        content: '',
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

    handleContentChange = (content) => {
        console.log(content);
        this.setState({ ...this.state, content: content });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt='COVID-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <div className={styles.map}>
                    <MapChart countryPicked={this.handleContentChange} />
                    <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
