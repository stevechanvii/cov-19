import React from 'react';
import CardItem from './CardItem';
import Moment from 'react-moment';

import styles from './Cards.module.css';

const Cards = ({ conData, gloData, country }) => {
    if (!conData.confirmed) {
        return 'Loading';
    }

    return (
        <div className={styles.information}>
            <div className={styles.information__card}>
                {Object.keys(conData).map((key, index) => (
                    <CardItem
                        countryNum={conData[key].value}
                        globalNum={gloData[key].value}
                        country={country}
                        title={key}
                        key={index}
                    />
                ))}
            </div>
            <div className={styles.information__date}>
                Last Update:{' '}
                <span>
                    <Moment format='YYYY/MM/DD HH:mm'>{gloData.lastUpdate}</Moment>
                </span>
            </div>
        </div>
    );
};

export default Cards;
