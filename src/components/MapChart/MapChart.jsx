import React, { useEffect, useState, memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// import styles from './MapChart.module.css';

const MapChart = ({ countryHovered, handleCountryChange }) => {
    useEffect(() => {});

    const [countrySelected, setCountrySelected] = useState('');

    const geoGlobal =
        'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

    const onMapClicked = (e) => {
        // console.log(e);
        handleCountryChange(e.NAME);
        setCountrySelected(e.NAME);
    };

    return (
        <>
            <ComposableMap
                projection={'geoMercator'}
                data-tip=''
                projectionConfig={{ scale: 100, rotate: [-160, 0, 0] }}
            >
                <ZoomableGroup>
                    <Geographies geography={geoGlobal}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke='#EAEAEC'
                                    strokeWidth='0.5'
                                    onMouseEnter={() => {
                                        const { NAME } = geo.properties;
                                        countryHovered(`${NAME}`);
                                    }}
                                    onMouseLeave={() => {
                                        countryHovered('');
                                    }}
                                    onClick={() => onMapClicked(geo.properties)}
                                    fill={
                                        countrySelected === geo.properties.NAME
                                            ? '#668cff'
                                            : '#9998A3'
                                    }
                                    style={{
                                        default: {
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: '#809fff',
                                            stroke: '#3366ff',
                                            strockWidth: 0.5,
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: '#DD4132',
                                            stroke: '#9E1030',
                                            strokeWidth: 0.75,
                                            outline: 'none',
                                            transition: 'all 250ms',
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
