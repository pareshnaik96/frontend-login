import React,{useState,useEffect} from 'react';
import {useHistory,useParams,Link} from 'react-router-dom';
import "./AddEdit.css"
import axios from "axios"
import {toast} from 'react-toastify'
 

const initialState ={
    name:"",
    email:"",
    password:"",
    cpassword:"",
};

const AddEdit = () => {
    const[state,setState]=useState(initialState)

    const{name,email,password,cpassword}=state

    const history = useHistory();

    const {id}= useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/get/${id}`).then((res)=>setState({...res.data[0]}))
    },[id])

    const handleSubmit=(e)=>{
       e.preventDefault();
       if(!name || !email || !password || !cpassword){
        toast.error("please provide value into each input field")

      }else{
        if(!id){
            axios.post("http://localhost:5000/post",{
            name,email,password,cpassword
            }).then(()=>{
                setState({name:"",email:"",password:"",cpassword:""})
            }).catch((err)=> toast.error(err.response.data))
          toast.success("User Added Successfully")   
        }else{
            axios.put(`http://localhost:5000/update/${id}`,{
                name,email,password,cpassword
            }).then(()=>{
                setState({name:"",email:"",password:"",cpassword:""})
            }).catch((err)=>{
              toast.error(err.response.data)})
          toast.success("User updated Successfully")   
        };
        setTimeout(()=> history.push("/"),500);
       }
      }

      const handleInputChange=(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value})
    };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name..." value={name || ""} onChange={handleInputChange}/>

        <label htmlFor='name'>Email ID</label>
        <input type="text" id="email" name="email" placeholder="Your Email..." value={email || ""} onChange={handleInputChange}/>

        <label htmlFor='name'>Password</label>
        <input type="password" id="password" name="password" placeholder="password..." value={password || ""} onChange={handleInputChange}/>

        <label htmlFor='name'>Confirm Password</label>
        <input type="password" id="cpassword" name="cpassword" value={cpassword || ""} placeholder="confirm password..." onChange={handleInputChange}/>
        
        <input type="submit" value={id ? "Update": "Save"}/>
        <Link to="/">
        <input type="button" value="Go Back"/>
        </Link>
      </form>
    </div>
   )
 };

export default AddEdit


//style={{display:flex,justifycmarginTop:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}}
//select{
//   width: 90%;
//   padding: 10px 15px;
//   margin:8px 0;
//   display: inline-block;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// }

// .container{
//   background-color: #fff;
//   margin-top: 8px;
//   max-width: 500px;
//   max-height: 700px;
//   padding: 20px 120px;
  
// }
// form{
//  display: flex;
//  flex-direction: column;
//  width: 100%;
//  margin:0 auto;

// }
// form input,form label{
//   font-size: 20px;
//   padding:5px 5px;
  
// }
// form input{
// margin-bottom: 10px;
// }

// input[type="submit"]{
//   width: 100%;
//   background-color: #4caf50;
//   color: white;
//   padding: 14px 20px;
//   margin: 8px 0;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }
// input[type="button"]{
//   width: 100%;
//   background-color: #40453e;
//   color: white;
//   padding: 14px 20px;
//   margin: 8px 0;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }
// input[type="submit"]:hover{
//   background-color: #45a049;
  
// }