const express = require('express');
const router = express.Router();

const model = require('../models/model');

router.get('/getclientallmsg/:id', (req, res, next)=>{
     model.find({client_id:req.params.id}, (err, data)=>{
      if (err) {
        res.json(err);
      }else{
        res.json(data);
      }
     });
     
});

router.get('/getmsg/:id', (req, res, next)=>{
  
     model.findById(req.params.id, (err, data)=>{
      if (err) {
        res.json(err);
      }else{
        res.json(data);
      }
     });

});

router.post('/newmsg', (req, res, next)=>{
    let newinfo = new model({
    	client_id: req.body.client_id,
    	msg: req.body.msg,
    	date_created: req.body.date_created
    });

    newinfo.save((err, results)=>{
        if(err){
        	res.json(err);
        }else{
        	res.json({msg: "add successfully"});
        }
    } );
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