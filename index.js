const express = require ('express');
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose');
const app = express();


// connect to the database name "online-store" 
mongoose.connect('mongodb://localhost/online-store', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, ()=>{
  console.log('connected to mongodb')
}); 

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


app.use(express.static('public'));


//add bodyParser middleware to handle the data coming from the post request through req.body (must be before routes)
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


//to get access to the api file for routes 
app.use('/api', require ('./routes/api'));      

var server = app.listen(process.env.port || 8080, ()=>{
    console.log("Hey, connected!")
}) 



