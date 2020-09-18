const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cardSchema = new Schema({

	cardName:{
		type:String

	},
	cardCost:{
		type:String

	},
	cardSet:{
		type:String

	},
	cardType:{
		type:String

	},
	cardDesc:{
		type:String

	},
	cardImage:{
		type:String
	}				
});
const card = mongoose.model("card",cardSchema);
module.exports = card;
