import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Register() {
  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();

    // handling the input values
    
    const handleInput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]:value,
      })

    }
    
    // handling the form submission

    const handleSubmit =async (e) =>{
      e.preventDefault();
     console.log(user);

     try {
      const response =await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
  
        },
        body:JSON.stringify(user),
       });

       if(response.ok){
        alert("Registerd Successful");
     const res_data = await response.json();
     console.log("res from server",res_data);

     // stored the token in localhost

     storetokenInLS(res_data.token);



        setUser({
          username:"",
          email:"",
          phone:"",
          password:"",
        });
        
        navigate("/login");

       }
  
       console.log(response);
  
      
     } catch (error) {
      console.log("Register",error);
      
     }

    
     
     

    };


  return (
    <>
    <section>
      <main>
        <div className="section-registration">

       <div className="container grid grid-two-cols">

          <div className="registration-image">

          <img src="/images/register1.png" alt="Registration Form Logo"
              width="500" height="400" />
          </div>

         {/* lets tackle registration form */}
        <div className="registration-form">
          <h1 className="main-heading mb-3">Registraion Form</h1>

          <br />

          <form onSubmit={handleSubmit}>

        <div>
        <label htmlFor="username">username</label>
        <input
         type="text" 
         name="username" 
         placeholder="enter your username"
         id="username"
        required
        autoComplete="off"
        value={user.username}
        onChange={handleInput}
        />

         </div> 

        <div>
        <label htmlFor="email">email</label>
        <input
         type="text" 
         name="email" 
         placeholder=" enter your email"
         id="email"
        required
        autoComplete="off"
        value={user.email}
        onChange={handleInput}

        />

         </div> 
        <div>
        <label htmlFor="phone">phone</label>
        <input
         type="number" 
         name="phone" 
         placeholder=" enter your phone"
         id="phone"
        required
        autoComplete="off"
        value={user.phone}
        onChange={handleInput}

        />

         </div> 
        <div>
        <label htmlFor="password">password</label>
        <input
         type="password" 
         name="password" 
         placeholder=" enter your password"
         id="password"
        required
        autoComplete="off"
        value={user.password}
        onChange={handleInput}

        />

         </div> 
        
          <br />

          <button type="submit" className="btn btn-submit">Register Now</button>
        

          </form>
        </div>

       </div>



        </div>
      </main>
    </section>
    </>
  )
}
