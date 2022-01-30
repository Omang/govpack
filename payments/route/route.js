const express = require('express');
const router = express.Router();

const paymentmodel = require('../models/paymentmodel');

router.get('/getclientpayments/:id', (req, res, next)=>{
     paymentmodel.find({client_id:req.params.id}, (err, data)=>{
      if (err) {
        res.json(err);
      }else{
        res.json(data);
      }
     });
     
});

router.get('/getpayment/:id', (req, res, next)=>{
  
     paymentmodel.findById(req.params.id, (err, data)=>{
      if (err) {
        res.json(err);
      }else{
        res.json(data);
      }
     });

});

router.post('/newpayment', (req, res, next)=>{
    let newinfo = new paymentmodel({
    	client_id: req.body.client_id,
    	amount: req.body.amount,
    	date_created: req.body.date_created
    });

    newinfo.save((err, results)=>{
        if(err){
        	res.json({msg: "Failed to add"});
        }else{
        	res.json({msg: "add successfully"});
        }
    } );
});


router.delete('/remove/:id', (req, res, next)=>{
   paymentmodel.remove({_id: req.params.id}, (err, results)=>{
   	if(err){
   		res.json(err);
   	}else{
   		res.json(results);
   	}
   });
});

module.exports = router;