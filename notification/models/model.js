const mongoose = require('mongoose');



const ClientSchema = mongoose.Schema({
	client_id:{
		type:mongoose.SchemaTypes.ObjectId,
		required: true
	}, 
	msg:{
		type: String,
		required: true
	},
	date_created:{
		type: Date,
		required: true
	}
});

const Reginfor = module.exports = mongoose.model('ClientInfo', ClientSchema);