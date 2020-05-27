import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import ReactTable from 'react-table-v6';

import 'react-table-v6/react-table.css';
import styles from './Table.module.css';

const Table = ({ country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData());
        };

        fetchData();
    }, [setDailyData]);

    const tableData = [];
    if (dailyData.length > 0) {
        for (let i = dailyData.length; i > 1; i--) {
            tableData.push({
                date: dailyData[i - 1].date,
                deaths: dailyData[i - 1].deaths - dailyData[i - 2].deaths,
                confirmed: dailyData[i - 1].confirmed - dailyData[i - 2].confirmed,
            });
        }
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date', // String-based value accessors!
            style: { textAlign: 'center' },
        },
        {
            Header: 'Infected',
            accessor: 'confirmed', // String-based value accessors!
            width: 70,
            style: { textAlign: 'center' },
        },
        {
            Header: 'Deaths',
            accessor: 'deaths', // String-based value accessors!
            width: 70,
            style: { textAlign: 'center' },
        },
    ];

    return (
        <div>
            {country === '' ? (
                <div className={styles.table}>
                    <p className={styles.table_title}>Global Data by Date</p>
                    <ReactTable
                        data={tableData}
                        columns={columns}
                        // showPagination={false}
                        defaultPageSize={20}
                        className='-striped -highlight -center'
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Table;
