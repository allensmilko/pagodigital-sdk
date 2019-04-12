'use strict';

var request = require("request");
exports.API_KEY = "";
exports.API_SECRET = "";
exports.PROD = "";
const TEST_ENDPOINT = "https://www.pagodigital.co/API_TEST/SDK/";
const PROD_ENDPOINT = "https://www.pagodigital.co/API/SDK/";
exports.initSdk = (API_KEY, API_SECRET, PROD) =>{
  this.API_KEY = API_KEY;
  this.API_SECRET = API_SECRET;
  this.PROD = PROD;
}

exports.tokenizeCard = (data) => {
  return new Promise( (reslove, reject) => { 
  let url = this.PROD ? PROD_ENDPOINT : TEST_ENDPOINT;
  if(this.API_KEY.length && this.API_SECRET.length){
    data.API_KEY = this.API_KEY;
    data.API_SECRET = this.API_SECRET;
      var options = { method: 'POST',
        url:  url + 'TOKEN_CARD/',
        headers: 
        { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: data };
      request(options, function (error, response, body) {
        if (error) {
          return  reject(error);
        }
        else{
          let resp = JSON.parse(response.body);
          if(resp.STATUS !== "200"){
            return reject(resp);
          }
          else{
            return reslove(resp);
          }             
        }
      });    
  }
  else{
    return reject(this.errorKeys());
  }
} ); 
}


exports.proccessPayment = (data) => {
  return new Promise( (reslove, reject) => { 
  let url = this.PROD ? PROD_ENDPOINT : TEST_ENDPOINT;
  if(this.API_KEY.length && this.API_SECRET.length){
    data.API_KEY = this.API_KEY;
    data.API_SECRET = this.API_SECRET;
      var options = { method: 'POST',
        url: url + 'PROCESS_TRANSACTION/',
        headers: 
        { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: data };
      request(options, function (error, response, body) {
        if (error) {
          return  reject(error);
        }
        else{
          let resp = JSON.parse(response.body);
          if(resp.STATUS !== "200"){
            return reject(resp);
          }
          else{
            return reslove(resp);
          } 
        }
      });    
  }
  else{
    return reject(this.errorKeys());
  }
} ); 
}


exports.effectyPaymentProcess = (data) => {
  return new Promise( (reslove, reject) => { 
  let url = this.PROD ? PROD_ENDPOINT : TEST_ENDPOINT;  
  if(this.API_KEY.length && this.API_SECRET.length){
    data.API_KEY = this.API_KEY;
    data.API_SECRET = this.API_SECRET;
      var options = { method: 'POST',
        url: url + 'TRANSACCIONES_EFECTIVO/TRANSACCIONES_EFECTY/',
        headers: 
        { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: data };
      request(options, function (error, response, body) {
        if (error) {
          return  reject(error);
        }
        else{
          let resp = JSON.parse(response.body);
          if(resp.STATUS !== "200"){
            return reject(resp);
          }
          else{
            return reslove(resp);
          } 
        }
      });    
  }
  else{
    return reject(this.errorKeys());
  }
} ); 
}

exports.effectyPinRequest = (data) => {
  return new Promise( (reslove, reject) => { 
  let url = this.PROD ? PROD_ENDPOINT : TEST_ENDPOINT;  
  if(this.API_KEY.length && this.API_SECRET.length){
    data.API_KEY = this.API_KEY;
    data.API_SECRET = this.API_SECRET;
      var options = { method: 'POST',
        url: url + 'TRANSACCIONES_EFECTIVO/CONSULTA_PIN_EFECTY/',
        headers: 
        { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: data };
      request(options, function (error, response, body) {
        if (error) {
          return  reject(error);
        }
        else{
          let resp = JSON.parse(response.body);
          if(resp.STATUS !== "200"){
            return reject(resp);
          }
          else{
            return reslove(resp);
          } 
        }
      });    
  }
  else{
    return reject(this.errorKeys());
  }
} ); 
}

exports.suRedPaymentProcess = (data) => {
  return new Promise( (reslove, reject) => {
  let url = this.PROD ? PROD_ENDPOINT : TEST_ENDPOINT; 
  if(this.API_KEY.length && this.API_SECRET.length){
    data.API_KEY = this.API_KEY;
    data.API_SECRET = this.API_SECRET;
      var options = { method: 'POST',
        url: url + 'TRANSACCIONES_EFECTIVO/TRANSACCIONES_SU_RED/',
        headers: 
        { 'Content-Type': 'application/x-www-form-urlencoded' },
        form: data };
      request(options, function (error, response, body) {
        if (error) {
          return  reject(error);
        }
        else{
          let resp = JSON.parse(response.body);
          if(resp.STATUS !== "200"){
            return reject(resp);
          }
          else{
            return reslove(resp);
          } 
        }
      });    
  }
  else{
    return reject(this.errorKeys());
  }
} ); 
}


exports.errorKeys = () => {
  return {
    code:401,
    message:"No tienes configuradas las llaves del sdk"
  }
}