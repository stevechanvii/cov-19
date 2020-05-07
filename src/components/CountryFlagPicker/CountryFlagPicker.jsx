import React from 'react';

import styles from './CountryFlagPicker.module.css';

const CountryFlagPicker = () => {
    return (
        <div className={styles.flag}>
            <img
                src='https://www.countryflags.io/be/flat/64.png'
                alt='flag be'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/au/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/us/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/af/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/aq/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/ar/flat/64.png'
                className={styles.flag__item}
            ></img>
        </div>
    );
};

export default CountryFlagPicker;
