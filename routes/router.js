const express = require('express');
const router  = express.Router();
var mysql     = require('mysql');


 
//Conexion DB
// const con = mysql.createConnection({
//     host: 'mysql.woo.prodequa.com',
//     user: 'wooprodequacom',
//     password: 'tFQDwvnx',
//     database: 'woo_prodequa_com'
//   });
  var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://woo.prodequa.com/',
  consumerKey: 'ck_859341ea81b54c6fbc31e249d1b8604815a81348',
  consumerSecret: 'cs_7c4733241f050418098e48cb056d45eabe28ec80',
  wpAPI: true,
  version: 'wc/v3'
});

router.get('/', (req, res) =>{
  WooCommerce.get('products', function(err, data, r) {
    if(err) console.log("Error:" +err);
    let arrayObj = JSON.parse(r);

   // res.json(arrayObj[0].images[0].src);

    let result = arrayObj.map(obj =>({
      ProductId:obj.id,
      ProductName: obj.name,
      ProductUrl: obj.permalink,
      ProductImageUrl: obj.images[0].src,
      CategoryId: obj.categories[0].id,
      CategoryName: obj.categories[0].name,
      Description: obj.short_description,
      OriginalPrice: obj.regular_price,
      Price: obj.sale_price,
      Instock: (obj.stock_status === "instock")?(true):(false),
    }));

    res.json(result);
  });
  
})
  
// con.connect();
// router.get('/woo', function(req,res){
//     con.query('SELECT * FROM wp_products', (err,rows) => {
//         if(err) console.log(err);
//         res.json(rows);
//       });
// })

module.exports = router; 