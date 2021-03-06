const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const APP = express();
const PORT = process.env.PORT || 5000;

APP.use(cors());
APP.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=> {console.log("Connected to MongoDB");})
const cardRouter = require("./routes/card");
APP.use('/card',cardRouter);
APP.listen(PORT, ()=>{
	console.log(`Server is running on Port: ${PORT}`);

});
