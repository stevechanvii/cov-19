import React from 'react';

import styles from './CountryFlagPicker.module.css';

const CountryFlagPicker = ({ countrySelected, handleCountryChange }) => {
    const countryList = [
        { au: 'Australia' },
        { us: 'United States of America' },
        { br: 'Brazil' },
        { ru: 'Russia' },
        { es: 'spain' },
        { gb: 'United Kingdom' },
        { fr: 'France' },
        { de: 'Germany' },
        { tr: 'Turkey' },
        { in: 'India' },
        { ir: 'Iran' },
        { cn: 'China' },
    ];

    return (
        <div className={styles.flag}>
            {countryList.map((country) => (
                <img
                    src={`https://www.countryflags.io/${Object.keys(country)[0]}/flat/64.png`}
                    alt={`flag ${Object.values(country)[0]}`}
                    key={Object.keys(country)[0]}
                    onClick={() => handleCountryChange(Object.values(country)[0])}
                    className={styles.flag__item}
                    style={
                        countrySelected === Object.values(country)[0]
                            ? { transform: 'scale(1.15)' }
                            : null
                    }
                ></img>
            ))}
        </div>
    );
};

export default CountryFlagPicker;
