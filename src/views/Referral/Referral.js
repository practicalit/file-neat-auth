import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import validate from 'validate.js';
import axios from 'axios';
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

const schema = {
  first_name: {
    length: {
      maximum: 128,
    },
  },
  last_name: {
    length: {
      maximum: 128,
    },
  },
  referee: {
    email: true,
    length: {
      maximum: 300,
    },
  },
  referrer: {
    email: true,
    length: {
      maximum: 300,
    },
  },
};



const Referral = (props) => {
  
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    logged: false
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };


  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState)
    if (formState.isValid) {
       alert('succesfully submitted');
    }
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;


  return (
    <div className={classes.root}>
      <form 
      name="referral_form"
      onSubmit={handleSubmit}
       method="post" 
       action="/ajax.php?action=referrer" 
       >
    <Section className={classes.section}>
      <div className={classes.formContainer}>
           <center><h1>The Referral Page</h1></center>
      <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              First name
            </Typography>
            <TextField
              placeholder=""
              variant="outlined"
              size="medium"
              name="first_name"
              type="text"
              helperText={
                hasError('first_name') ? formState.errors.first_name[0] : null
              }
              onChange={handleChange}
              error={hasError('first_name')}
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Last Name
            </Typography>
            <TextField
              placeholder=""
              variant="outlined"
              size="medium"
              name="last_name"
              type="text"
              helperText={
                hasError('last_name') ? formState.errors.last_name[0] : null
              }
              onChange={handleChange}
              error={hasError('last_name')}
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
              placeholder=""
              variant="outlined"
              size="medium"
              name="referee"
              type="email"
              helperText={
                hasError('referee') ? formState.errors.referee[0] : null
              }
              onChange={handleChange}
              error={hasError('referee')}
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
              placeholder=""
              variant="outlined"
              size="medium"
              name="referrer"
              type="text"
              helperText={
                hasError('referrer') ? formState.errors.referrer[0] : null
              }
              onChange={handleChange}
              error={hasError('referrer')}
              
            />
          </Grid>      
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
    </form>
    </div>
  );
};

export default Referral;

