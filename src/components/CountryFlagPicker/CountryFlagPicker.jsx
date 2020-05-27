import React from 'react';

import styles from './CountryFlagPicker.module.css';

const CountryFlagPicker = () => {
    return (
        <div className={styles.flag}>
            <img
                src='https://www.countryflags.io/au/flat/64.png'
                alt='flag US'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/us/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/br/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/ru/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/es/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/gb/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/fr/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/de/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/tr/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/in/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/ir/flat/64.png'
                className={styles.flag__item}
            ></img>
            <img
                src='https://www.countryflags.io/cn/flat/64.png'
                className={styles.flag__item}
            ></img>
        </div>
    );
};

export default CountryFlagPicker;
