import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import axios from 'axios';
import CompanyService from 'services/CompanyService';
import StorageService from 'services/StorageService';
import { users } from 'views/WebBasic/data';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
 password: {
    presence: { allowEmpty: false, message: 'is required' },
    
    length: {
      minimum: 8,
    },
  },
  newPassword: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
};

const  ChangePassword = () => {
  const history = useHistory();
  const classes = useStyles();
  

 const [putPassword, setPutPassword] = React.useState({
  
   password: '',
   newPassword: ''
 })

  
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
    
     putPassword[event.target.name] = event.target.value;
      setPutPassword({...putPassword});
    
       
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

    const headers = {
                 'Content-Type': 'application/json',
                 Authentication: StorageService.get('token')
               }

    const data = {
       
        current: formState.values.password,
         new: formState.values.newPassword
    }
    

    if (formState.isValid) {
      axios.post(`${process.env.REACT_APP_BACKEND_SERVER}${process.env.REACT_APP_CHANGE_PASSWORD}`,data,{
          headers: headers,
         
      })
      .then( (response) => {
        
         setPutPassword({current: response.data.password, new: response.data.newPassword});{
         
         
         history.push("/account/?pid=general");
        } 
      }, error => {
        console.error(error);
      })
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="password"
              label="oldPassword *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={hasError('password') ? formState.errors.password[0] : null}
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="newPassword"
              label="newPassword *"
              variant="outlined"
              size="medium"
              name="newPassword"
              fullWidth
              helperText={
                hasError('password') ? formState.errors.newPassword[0] : null
              }
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.newPassword || ''}
            />
          </Grid>
           
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
             Change
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="right"
            >
             {' '}
              <LearnMoreLink
                title="sign in"
                href="/signin"
              />
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChangePassword;
