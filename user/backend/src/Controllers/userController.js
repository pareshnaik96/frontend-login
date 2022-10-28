const con = require('../connection')



const getUser = ((req,res)=>{
    const sqlGet = "SELECT * FROM user";
    con.query(sqlGet,(err,result)=>{
               res.send(result)
           })
})

const postUser = ((req,res)=>{
    
    const {name,email,password,cpassword} = req.body;
    console.log(req.body)
    const sqlInsert =  "INSERT INTO user(name,email,password,cpassword) VALUES(?,?,?,?)";
    con.query(sqlInsert[name,email,password,cpassword],(error,result)=>{
               if(error){
                console.log(error)
               }
               res.send("User added successfully"+result.insertId)
           })
});

const getUserId = ((req,res)=>{
    
    const {id} = req.params
    const sqlGet =  "SELECT * FROM user where id = ? ";
    con.query(sqlGet,id,(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})

const updateUser = ((req,res)=>{
    
    const {id} = req.params
    const { name,email,password,cpassword} = req.body
    const sqlUpdate =  "UPDATE user SET name=?,email=?,password=?,cpassword=? WHERE id = ?";
    con.query(sqlUpdate,[name,email,password,cpassword,id],(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})

const deleteUser = ((req,res)=>{
    
    const {id} = req.params
    const sqlRemove =  "DELETE FROM user WHERE id=?";
    con.query(sqlRemove,id,(error,result)=>{
               if(error){
                console.log(error)
               }
           })
})


module.exports.getUser = getUser
module.exports.postUser = postUser 
module.exports.getUserId = getUserId
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser 