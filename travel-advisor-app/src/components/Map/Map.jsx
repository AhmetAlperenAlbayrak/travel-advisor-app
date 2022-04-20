import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
    // We call the useStyles hook to get the classes
    const classes = useStyles();
    // We call the useMediaQuery hook to get the screen size
    const isMobile = useMediaQuery('(max-width:600px)');

    // We define the coordinates of the map
    const coordinates= {
        lat: 0,
        lng: 0
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAzOAyLWvvW1-w7WqgFdeLRaZkz1jarN2s' }}
                defaultCenter={ coordinates }
                center = {coordinates}
                defaultZoom={isMobile ? 4 : 6}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={() => {}}
                onChildClick={() => {}}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;