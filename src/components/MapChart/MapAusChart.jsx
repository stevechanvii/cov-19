import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import styles from './MapChart.module.css';

const MapChart = ({ countryPicked }) => {
    useEffect(() => {});
    /**
     * Map Aus API
     * https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/aus.topo.json
     * 
     * ComposableMap Configuration:
     * projection={'geoMercator'}
            projectionConfig={{
                rotate: [-135.0, 30.0, 0],
                scale: 700,
            }}
     * 
     */

    const geoGlobal =
        'https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/aus.topo.json';

    return (
        // <div className={styles.map}>
        <ComposableMap
            projection={'geoMercator'}
            projectionConfig={{
                rotate: [-135.0, 30.0, 0],
                scale: 700,
            }}
            style={{ width: '80%', height: 'auto' }}
        >
            <Geographies geography={geoGlobal}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill='#9998A3'
                            onMouseEnter={() => {
                                const { NAME, POP_EST } = geo.properties;
                            }}
                            style={{
                                default: {
                                    fill: '#D6D6DA',
                                    outline: 'none',
                                },
                                hover: {
                                    fill: '#F53',
                                    outline: 'none',
                                },
                                pressed: {
                                    fill: '#E42',
                                    outline: 'none',
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
        // </div>
    );
};

export default MapChart;
