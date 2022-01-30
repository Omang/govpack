const express = require('express');
const router = express.Router();

const Client_info = require('../models/clientinfo');

router.get('/allclients', (req, res, next)=>{
     Client_info.find(function(err, clientinfo){
        res.json(clientinfo);
     });
});

router.get('/checkname/:name', (req, res, next)=>{
     Client_info.find({organisation_name: req.params.name},function(err, clientinfo){
        res.json(clientinfo);
     });
});

router.get('/client/:id', (req, res, next)=>{
     Client_info.findById(req.params.id, (err, data)=>{
      if (err) {
        res.json(err);
      }else{
        res.json(data);
      }
     });
});

router.post('/addclient', (req, res, next)=>{
    let newinfo = new Client_info({
    	organisation_name: req.body.organisation_name,
    	location: req.body.location,
    	contact: req.body.contact
    });

    newinfo.save((err, results)=>{
        if(err){
        	res.json(err);
        }else{
        	res.json(results);
        }
    } );
});


router.delete('/removeclient/:id', (req, res, next)=>{
   Client_info.remove({_id: req.params.id}, (err, results)=>{
   	if(err){
   		res.json(err);
   	}else{
   		res.json({msg: "deleted successfully"});
   	}
   });
});

module.exports = router;