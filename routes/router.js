const express = require('express');
const router  = express.Router();
var mysql     = require('mysql');


 
//Conexion DB
const con = mysql.createConnection({
    host: 'mysql.woo.prodequa.com',
    user: 'wooprodequacom',
    password: 'tFQDwvnx',
    database: 'woo_prodequa_com'
  });
  
con.connect();
router.get('/woo', function(req,res){
    con.query('SELECT * FROM wp_products', (err,rows) => {
        if(err) console.log(err);
        res.json(rows);
      });
})

module.exports = router; 