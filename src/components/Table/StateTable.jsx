import React, { useState, useEffect } from 'react';
import { fetchDailyStateData } from '../../api';
import ReactTable from 'react-table-v6';

import 'react-table-v6/react-table.css';
import styles from './Table.module.css';

const StateTable = ({ country }) => {
    const [stateData, setStateData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setStateData(await fetchDailyStateData(country ? country : 'Australia'));
        };

        fetchData();
    }, [setStateData, country]);

    console.log(stateData);

    const columns = [
        {
            Header: 'State',
            accessor: 'provinceState', // String-based value accessors!
            style: { textAlign: 'left' },
        },
        {
            Header: 'Infected',
            accessor: 'confirmed', // String-based value accessors!
            width: 70,
            style: { textAlign: 'center' },
        },
        {
            Header: 'Recovered',
            accessor: 'recovered', // String-based value accessors!
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
        <div className={styles.table}>
            {Object.keys(stateData).length > 1 && country !== '' ? (
                <div>
                    <p className={styles.table_title}>
                        State Data in {country ? country : 'Australia'}
                    </p>
                    <ReactTable
                        data={stateData}
                        columns={columns}
                        showPagination={false}
                        pageSize={Object.keys(stateData).length}
                        className='-striped -highlight'
                    />
                </div>
            ) : null}
        </div>
    );
};

export default StateTable;
