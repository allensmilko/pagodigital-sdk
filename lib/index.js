'use strict';

var request = require("request");

var API_KEY = 'RAF4OEX95PWUII5PU90P';
var API_SECRET = 'N8SAJDRNZA96JQTNPUHZ';
const initSdk = exports.initSdk = (API_KEY, API_SECRET) =>{
  API_KEY = API_KEY;
  API_SECRET = API_SECRET;
}

const testring = exports.testring = (data) => {
    console.log("Testando!");
var options = { method: 'POST',
  url: 'https://www.pagodigital.co/API_TEST/SDK/TOKEN_CARD/',
  headers: 
   { 'Content-Type': 'application/x-www-form-urlencoded' },
  form: data };

request(options, function (error, response, body) {
  if (error) {
    console.log(error);
    return error;
  }
  else{
    console.log(response);
      return response.body;
  }
});




  
}

