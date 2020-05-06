import React from 'react';
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const CardItem = ({ countryNum, globalNum, country, title }) => {
    if (!countryNum) {
        return 'Loading';
    }

    return (
        <div className={cx(styles.information__card__item, styles[title])} key={title}>
            <h1 className={styles.information__card__item__title}>{title}</h1>
            <h2 className={styles.information__card__item__country}>
                <span>{country ? country : 'Australia'}: </span>
                <CountUp start={0} end={Number(countryNum)} duartion={3} separator=',' />
            </h2>
            <h2 className={styles.information__card__item__country}>
                <span>Global: </span>
                <CountUp start={0} end={Number(globalNum)} duartion={3} separator=',' />
            </h2>
        </div>
    );
};

export default CardItem;
