import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button, Grid, TextField, Typography } from '@material-ui/core';



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

const Referral = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{backgroundColor:'sandybrown'}}>
    <Section className={classes.section}>
      <div className={classes.formContainer}>
       <h1 style={{color:'green', textAlign:'center'}}>The Referral Page</h1>
       <br/>
      <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full Name
            </Typography>
            <TextField
              placeholder="name"
              variant="outlined"
              size="medium"
              name="email"
              type="text"
            />
          </Grid>
           <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              placeholder="e-mail address"
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
            Referral E-mail
            </Typography>
            <TextField
              placeholder="Referral e-mail"
              variant="outlined"
              size="medium"
              name="e-mail"
              type="text"
              
            />
          </Grid>
          <br/>
          <br/>      
          <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Submit
            </Button>   

              
      <div className={classes.heroImageContainer}></div>
      </div>
    </Section>
    </div>
  );
};

export default Referral;

