const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv=require('dotenv');

const path= require('path')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI;
//console.log(uri);
mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex : true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongoose db established successfully")
})
app.use(cors());
app.use(express.json());
//app.use(app.router);

const formRouter = require('./routes/form');
app.use('/form',formRouter)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }

app.listen(port,()=>{
    console.log("Server is running on port"+port);
})
