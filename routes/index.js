const url = require('url');
const querystring = require('querystring');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 /* Maneja la aplicación principal */
router.get('/principal',
     function(req, res){

      console.log("Body:", req.body);
      console.log("Query:", req.query);
      let username = req.query.username;
      let tickets = req.query.tickets;

     console.log(username);
     console.log(tickets);

      //console.log(req.user);
      res.render('principal', {message: 'Bienvenido', username: username, tickets:tickets});
});

module.exports = router;
