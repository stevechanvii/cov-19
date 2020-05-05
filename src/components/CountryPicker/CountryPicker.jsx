import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const countries = async () => {
            setFetchedCountries(await fetchCountries());
        };

        countries();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
