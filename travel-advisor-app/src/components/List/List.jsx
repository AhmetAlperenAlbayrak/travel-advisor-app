import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles  from './styles.js';

const List = () => {
    const classes = useStyles();
    // Using useState hook to set the type of the list
    const [type, setType] = useState('restaurants');
    // Using useState hook to set the rating of the list
    const [rating, setRating] = useState('');

    return (
        // div component with the className of classes.container
        <div className={classes.container}>
            <Typography variant="h4"> Restaurants, Hotels & Attractions around you </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value) }>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value) }>
                    <MenuItem value= {0} >All</MenuItem>
                    <MenuItem value= {3} >Above 3 Stars</MenuItem>
                    <MenuItem value= {4} >Above 4 Stars</MenuItem>
                    <MenuItem value= {4.5} >Above 4.5 Stars</MenuItem>
                </Select>
            </FormControl>
        </div>
                

    );
};

export default List;