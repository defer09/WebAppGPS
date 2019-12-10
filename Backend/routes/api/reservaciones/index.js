var express = require('express');
var router = express.Router();

function initResApi(db){

var rsvModel = require('./reservaciones.model')(db);

router.get('/all', function(req, res){
  rsvModel.getAllReservaciones((err, reser)=>{
    if(err){
      res.status(404).json([]);
    } else {
      res.status(200).json(reser);
    }
  });// end getAllProducts
}); // get /all

router.post('/new', function(req, res){
   if (req.user.roles.findIndex((o)=>{return o=="public"}) == -1) {
     return res.status(401).json({"error":"Sin privilegio"});
   }
   var newRsv = Object.assign(
      {},
      req.body,
      { 
        "sku":req.body.sku,
        "price":parseInt(req.body.price),
        "createdBy": req.user }
    );
   prdModel.saveNewProduct(newRsv, (err, rslt)=>{
     if(err){
       res.status(500).json(err);
     }else{
       res.status(200).json(rslt);
     }
   });// saveNewProduct
}); // post /new


router.delete(
  '/delete/:rsvid',
  function( req, res) {
    var id = req.params.rsvid || '';
    if(id===''){
      return res.status(404).json({"error":"Identificador no válido"});
    }
    rsvModel.deleteProduct(id , (err, rslt)=>{
      if(err){
        return res.status(500).json({"error":"Ocurrio un error intente de nuevo."});
      }
      return res.status(200).json({"msg":"Deleted OK"});
    }); //deleteProduct 
  }
);// delete

  return router;
} //end initProductsApi

module.exports = initResApi;