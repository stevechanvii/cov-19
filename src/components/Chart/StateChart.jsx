import React, { useEffect, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { fetchDailyStateData } from '../../api';

import styles from './Chart.module.css';
import cx from 'classnames';

const StateChart = ({ country }) => {
    const [stateData, setStateData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setStateData(await fetchDailyStateData(country ? country : 'Australia'));
        };

        fetchData();
    }, [setStateData, country]);

    const labels = [
        { Confirmed: 'rgba(0, 153, 255, 0.5)' },
        { Recovered: 'rgba(108, 238, 173, 0.6)' },
        { Deaths: 'rgba(255, 77, 77, 0.8)' },
    ];
    let data = null;
    if (Object.keys(stateData).length) {
        data = {
            labels: stateData.map((state) => state.provinceState),
            datasets: labels.map((label) => ({
                label: Object.keys(label).toString(),
                backgroundColor: label[Object.keys(label)],
                borderColor: label[Object.keys(label)],
                borderWidth: 1,
                hoverBackgroundColor: label[Object.keys(label)],
                hoverBorderColor: label[Object.keys(label)],
                data: stateData.map((state) => state[Object.keys(label).toString().toLowerCase()]),
                options: {
                    maintainAspectRatio: false,
                },
            })),
        };
    }

    return (
        <div className={cx(styles.container, styles.barchart__horizontal)}>
            {data && Object.keys(stateData).length > 1 ? <HorizontalBar data={data} /> : null}
        </div>
    );
};

export default StateChart;
