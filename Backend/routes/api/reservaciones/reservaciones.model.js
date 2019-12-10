var ObjectId = require('mongodb').ObjectId;

var IndexVerified = false;

function reserModel(db){
  let reserModel = {};
  var reserCollection = db.collection("reservaciones");

  if ( !IndexVerified) {
    reserCollection.indexExists("sku_1", (err, rslt)=>{
      if(!rslt){
        reserCollection.createIndex(
          { "sku": 1 },
          { unique: true, name:"sku_1"},
          (err, rslt)=>{
            console.log(err);
            console.log(rslt);
        });//createIndex
      }
    }); // indexExists
  }

  reserModel.getAllReser = (handler)=>{
    reserCollection.find({}).toArray(
      (err, docs)=>{
        if(err){
          console.log(err);
          return handler(err, null);
        }
        return handler(null, docs);
      }
    );
  } // end getAllProducts

  reserModel.saveNewReser = ( newReser, handler)=>{
    reserCollection.insertOne(newReser, (err, result)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, result);
    }); //insertOne
  }
  

  reserModel.deleteReser = (id, handler)=>{
    var query = {"_id": new ObjectId(id)}
    reserCollection.deleteOne(query, (err, rslt)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      return handler(null, rslt);
    })//deleteOne
  }

  return reserModel;
}


module.exports = reserModel;