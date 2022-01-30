const express = require('express');
var axios = require('axios');
const router = express.Router();

const model = require('../models/society');

router.post('/processname/', (req, res, next)=>{

  var dataprocess = {
    client_id : req.body.client_id,
    society_members : req.body.society_members,
    society_status : req.body.society_status 
  };
     
});

router.get('/searchclient/:name', (req, res, next)=>{

     let name = req.params.name;

     axios.get("http://localhost:4200/api/checkname/"+name)
          .then((response)=>{
              res.json(response.data);
          })
          .catch((err)=>{
              throw err;
          });
  
   

});

router.post('/reservename', (req, res, next)=>{
    var formdata = {
      organisation_name: req.body.organisation_name,
      location: req.body.location,
      contact: req.body.contact,
      category: req.body.category,
      date_created: req.body.date_created
    };
    
    axios.post("http://localhost:4200/api/addclient", {organisation_name: formdata.organisation_name,
                                                      location: formdata.location,
                                                      contact: formdata.contact})
          .then((response)=>{
           // res.json(response.data);
          
            var client_id = response.data._id;
             let newinfo = new model({
                                      client_id: response.data._id,
                                      category: formdata.category,
                                      date_created: formdata.date_created
                                     });

    newinfo.save((err, results)=>{
        if(err){
          res.json(err);
        }else{
          var msg = "Society name created";

          axios.post("http://localhost:3000/api/newmsg", {client_id: client_id, msg: msg, date_created: formdata.date_created})
               .then((response)=>{
                  res.json({msg: "add successfully"});
               })
               .catch((err)=>{
                throw err;
               });
          
        }
    } );

          } )
          .catch((err)=>{
                throw err;
               });

   
});


router.delete('/remove/:id', (req, res, next)=>{
   model.remove({_id: req.params.id}, (err, results)=>{
    if(err){
      res.json(err);
    }else{
      res.json(results);
    }
   });
});

module.exports = router;