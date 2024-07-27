
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";


export default function Login() {

  const [user,setUser] = useState({
    email:"",
    password:"",
  })

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,
    [name]:value,})

  }

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();


  const handleSubmit =async (e) =>{
    e.preventDefault();
    console.log(user);
    
    try {

      
    const response =await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user),
      

    });


    if(response.ok){
      alert("login successful");
      setUser({email:"",password:""});
      const res_data = await response.json();
      console.log("res from server",res_data);
 
      // stored the token in localhost 
 
      storetokenInLS(res_data.token);
 

    }else{
      alert("invalid credentials");
    }

    navigate("/")
    console.log("login form",response);
 
  
      
    } catch (error) {
      console.log(error);
    }
    
  }





  return (
    <>
    <section>
    
    <main>
   
   <div className="section-login">

   <div className="container grid grid-two-cols"> 
   
   
   <div className="login-image">

   <img src="/images/register1.png" alt=" Logo Form Logo"
              width="500" height="400" />

   </div>
   

   {/* lets tackle login form */}

<form onSubmit={handleSubmit}>
   <div className="login-form">
    <h1 className="main-heading mb-3">Login Form</h1>
     <br />

     <div>
     <label htmlFor="email">email</label>
     <input type="text"
      name="email"
      id="email"
      placeholder="enter your email"
      autoComplete="off"
      required
      value={user.email}
      onChange={handleInput}
       />


     </div>
     <div>
     <label htmlFor="password">password</label>
     <input type="password"
      name="password"
      id="password"
      placeholder="enter your password"
      autoComplete="off"
      required
      value={user.password}
      onChange={handleInput}
       />


     </div>



   </div>

   <br />

   <button type="submit">Login Now</button>

   </form>


   
   
   
   
   </div>


   </div>




    </main>



    </section>


 
    </>
  )
}
