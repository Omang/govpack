const mongoose = require('mongoose');



const ClientSchema = mongoose.Schema({
	organisation_name:{
		type: String,
		required: true
	}, 
	location:{
		type: String,
		required: true
	},
	contact:{
		type: String,
		required: true
	}
});

const Reginfor = module.exports = mongoose.model('ClientInfo', ClientSchema);