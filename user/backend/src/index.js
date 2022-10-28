const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");  //cors access our backend api in react frontend
const route = require('./Routes/route')
const con = require('./connection')



app.use(cors());
app.use(express.json());  //for converting the data into json
app.use(bodyParser.urlencoded({extended:true})); //for encording the url


app.use('/', route);


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})