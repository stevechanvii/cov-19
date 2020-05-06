import React from 'react';
import CountUp from 'react-countup';

import styles from './CardNew.module.css';
import cx from 'classnames';

const CardNew = ({ conData, gloData, country }) => {
    if (!conData.confirmed) {
        return 'Loading';
    }

    const cardItems = Object.keys(conData).map((key, index) => (
        <div className={cx(styles.card__item, styles[key])} key={index}>
            <h1 className={styles.card__item__title}>{key}</h1>
            <h2 className={styles.card__item__country}>
                <span>{country ? country : 'Australia'}: </span>
                <CountUp start={0} end={conData[key].value.toString()} duartion={3} separator=',' />
            </h2>
            <h2 className={styles.card__item__country}>
                <span>Global: </span>
                <CountUp start={0} end={gloData[key].value.toString()} duartion={3} separator=',' />
            </h2>
        </div>
    ));

    return <div className={styles.card}>{cardItems}</div>;
};

export default CardNew;
