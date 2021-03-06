import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData());
        };

        fetchData();
    }, [setDailyData]);

    const lineChart =
        dailyData.length !== 0 ? (
            <Line
                data={{
                    labels: dailyData.slice(-60).map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.slice(-60).map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'rgba(0, 153, 255, 0.5)',
                            backgroundColor: 'rgba(0, 153, 255, 0.2)',
                            fill: true,
                        },
                        {
                            data: dailyData.slice(-60).map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'rgba(255, 77, 77, 0.8)',
                            backgroundColor: 'rgba(255, 77, 77, 0.3)',
                            fill: true,
                        },
                    ],
                }}
            />
        ) : null;

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 153, 255, 0.5)',
                            'rgba(108, 238, 173, 0.6)',
                            'rgba(255, 77, 77, 0.8)',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
                size: 10,
            }}
        />
    ) : null;

    return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
