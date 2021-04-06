import React from 'react'
import axios from 'axios';
import StorageService from 'services/StorageService';

const CompanyService = {

  login: function(email, password) {
      //do the magic here.
      console.log("yes has logged in");
      return 'something';
  },
  checkLogged: function() {

  },
   authenticated: function() {
    let company = JSON.parse(StorageService.get('company'));
    if (company) {
      return true;
    }
    return false;
  }
};
   
export default CompanyService;
