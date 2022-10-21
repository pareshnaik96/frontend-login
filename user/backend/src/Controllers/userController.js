const mysql = require("mysql2")


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"user_login"
})
db.connect((err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("mysql is connected")
    }
})


const getUser = ((req,res)=>{
    const sqlGet = "SELECT * FROM user";
    db.query(sqlGet,(err,result)=>{
               res.send(result)
           })
})

const postUser = ((req,res)=>{
    
    const {name,email,password,cpassword} = req.body;
    const sqlInsert =  "INSERT INTO user(name,email,password,cpassword) VALUES(?,?,?,?)";
    db.query(sqlInsert[name,email,password,cpassword],(error,result)=>{
               if(error){
                console.log(error)
               }
               res.send("User added successfully")
           })
});

const deleteUser = ((req,res)=>{
    
    const {id} = req.params
    const sqlRemove =  "DELETE FROM user WHERE id=?";
    db.query(sqlRemove,id,(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})
const getUserId = ((req,res)=>{
    
    const {id} = req.params
    const sqlGet =  "SELECT * FROM user where id = ? ";
    db.query(sqlGet,id,(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})
const updateUser = ((req,res)=>{
    
    const {id} = req.params
    const { name,email,password,cpassword} = req.body
    const sqlUpdate =  "UPDATE user SET name=?,email=?,password=?,cpassword=? WHERE id = ?";
    db.query(sqlUpdate,[name,email,password,cpassword,id],(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})

module.exports.getUser = getUser
module.exports.postUser = postUser 
module.exports.deleteUser = deleteUser 
module.exports.getUserId = getUserId
module.exports.updateUser = updateUser