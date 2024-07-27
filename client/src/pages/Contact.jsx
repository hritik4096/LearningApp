import { useState } from "react"
export default function Contact() {
  
  const [contact,setContact] = useState({
    username:"",
    email:"",
    message:"",
  })

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    // setContact({
    //   ...contact,
    //   [name]:value,
    // })

    setContact(prev => ({
      ...prev,
      [name]:value,
      
    }));

  
  }

  const handleSubmit = (e) =>{
         e.preventDefault();
         console.log(contact);
        
  }





  

  return (
  
    <>
   
   <section className="section-contact">

     <div className="contact-content container">
  
    <h1 className="main-heading">Contact Us</h1>

     </div>

     {/* contact page main */}

     <div className="container grid grid-two-cols">
      
      <div className="contact-img">

      <img src="/images/contact.webp" alt="We are always ready to help "  
      height="400" width="400"/>
      {/* <img src="/images/contact.png" alt="Contact " /> */}

      </div>

      {/* contact form content actual */}

      <section className="section-form">
        <form onSubmit={handleSubmit}>
    
    <div>
    <label htmlFor="username">Username</label>
    <input type="text"
    name="username"
    id="username"
    placeholder="enter your username"
    onChange={handleInput}
    value={contact.username}
    autoComplete="off"
    required
    />

    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="email"
    name="email"
    id="email"
    placeholder="enter your username"
    onChange={handleInput}
    value={contact.email}
    autoComplete="off"
    required
    />
  

    </div>

    <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="5"
      onChange={handleInput}
      value={contact.message}>
        v

      </textarea>
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>


        </form>
      </section>


     </div>

     <section className="mb-3">

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55015.77799374878!2d76.5522773632518!3d30.478990097019935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc7c202e6489%3A0xf2b1d67562f68349!2sRajpura%2C%20Punjab%20140401!5e0!3m2!1sen!2sin!4v1712393458832!5m2!1sen!2sin"
      width="100%"
       height="450"
        allowFullScreen
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"></iframe>


     </section>

     

   </section>
 


    </>
  )
}
