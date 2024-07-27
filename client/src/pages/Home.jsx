import { NavLink } from "react-router-dom"
export default function Home() {
  return (
    <>
   <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        
        <div className="hero-content">
          <p>We are the World Best IT Company</p>
          <h1>Welcome to TechnicalTube </h1>
          <p>
            Are you ready to take your business to the next
            level with cutting-edge IT solutions? Look no further! 
            At TechnicalTube, We specialize in providing innovative IT Services
            and solutions tailored to meet your unique needs.
          </p>
          <br />
          <div className="btn btn-group">
            <NavLink to="/contact">
              <button className="btn">Connect Now</button>
            </NavLink>
            <NavLink to="/service">
              <button className="btn secondary-btn">Learn More</button>
            </NavLink>
          </div>

        </div>

       <div className="hero-image">
        <img src="/images/home1.png" alt="home page logo"
        width="700" height="500" />
       </div>


      </div>
    </section>
   </main>

   {/* second section */}

   <section className="section-analytics">
    <div className="container grid grid-four-cols">
      <div className="div1">
        <h2>50+</h2>
        <p>Registered companies</p>
      </div>
      <div className="div1">
       <h2>100,00+</h2>
       <p>Happy Clients</p>
      </div>
      <div className="div1">
        <h2>500+</h2>
        <p>Well Known Developers</p>

      </div>
      <div className="div1">
           <h2>24/7</h2>
           <p>Service</p>
      </div>
    </div>
   </section>

   {/* third section */}
   <section className="section-hero">
      <div className="container grid grid-two-cols">
        
       <div className="hero-image">
        <img src="/images/home1.png" alt="home page logo"
        width="700" height="500" />
       </div>

        <div className="hero-content">
          <p>We are here to help you</p>
          <h1>Get Started Today </h1>
          <p>
            Ready to take the first step towards a more efficient and secure
            IT infrastructure? Contact us today for a free consultation and 
            lets discuss how TechnicalTube can help your business thrive in 
            the digital age.
          </p> 
          <br />
          <div className="btn btn-group">
            <NavLink to="/contact">
              <button className="btn">Connect Now</button>
            </NavLink>
            <NavLink to="/service">
              <button className="btn secondary-btn">Learn More</button>
            </NavLink>
          </div>

        </div>


      </div>
    </section>
   
    
    </>
  )
}
