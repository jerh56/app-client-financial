const url = require('url');
const querystring = require('querystring');
var express = require('express');
const { cursorTo } = require('readline');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});


/* GET error page. */
router.get('/error', function(req, res, next) {
  let message = req.query.message;
  res.render('error', { message: message });
});

 /* Maneja la aplicación principal */
router.get('/principal',
     function(req, res){

      console.log("Body:", req.body);
      console.log("Query:", req.query);
      let username = req.query.username;
      let tickets = req.query.tickets;
      let customerid = req.query.customerid;
     console.log(username);
     console.log(tickets);
     console.log(customerid);
      //console.log(req.user);
      res.render('principal', {message: 'Bienvenido', username: username, tickets:tickets, customerid: customerid});
});

/* GET tickets page. */
router.get('/tickets', function(req, res, next) {
  let investment_projectID = req.query.investment_projectID;
  res.render('tickets', { investment_projectID: investment_projectID });
});

module.exports = router;
