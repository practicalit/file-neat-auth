import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

//import Pricings from '../../views/WebBasic/components/Pricings/'; 
//import { pricings } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const FileStatus = (props) => {
    const classes = useStyles();
    return (
        <div>
           <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              <h1>File status message coming soon.</h1>
            </Typography> 
            </Grid>
        </div>
    )
}

export default FileStatus;