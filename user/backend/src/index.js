const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require('./Routes/route')


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/', route);


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})