import React, { useState } from 'react';

import styles from './CountryFlagPicker.module.css';

const CountryFlagPicker = ({ country }) => {
    const countryList = [
        { au: 'Australia' },
        { us: 'USA' },
        { br: 'Brazil' },
        { ru: 'Russian' },
        { es: 'spain' },
        { gb: 'United Kindom' },
        { fr: 'France' },
        { de: 'Germany' },
        { tr: 'Turkey' },
        { in: 'India' },
        { ir: 'Iran' },
        { cn: 'China' },
    ];

    const [countryPicked, setCountryPicked] = useState('');

    console.log(countryPicked);

    return (
        <div className={styles.flag}>
            {countryList.map((country) => (
                <img
                    src={`https://www.countryflags.io/${Object.keys(country)[0]}/flat/64.png`}
                    alt={`flag ${Object.values(country)[0]}`}
                    key={Object.keys(country)[0]}
                    onClick={() => setCountryPicked(Object.values(country)[0])}
                    className={styles.flag__item}
                    style={
                        countryPicked == Object.values(country)[0]
                            ? { transform: 'scale(1.15)' }
                            : null
                    }
                ></img>
            ))}
        </div>
    );
};

export default CountryFlagPicker;
