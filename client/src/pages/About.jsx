import { NavLink } from "react-router-dom"
export default function About() {
  return (
    <div>
       <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        
        <div className="hero-content">
          <p>Welcome to TechnicalTube</p>
          <h1>Why Choose Us? </h1>
          <p>
           Expertise: Our team consists of experienced IT professionals who are
           passionate about staying up-to-date with the latest industry trends.
          </p>
          <p>
           Expertise: Our team consists of experienced IT professionals who are
           passionate about staying up-to-date with the latest industry trends.
          </p>
          <p>
           Expertise: Our team consists of experienced IT professionals who are
           passionate about staying up-to-date with the latest industry trends.
          </p>
          <p>
           Expertise: Our team consists of experienced IT professionals who are
           passionate about staying up-to-date with the latest industry trends.
          </p>
         
         
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
        <img src="/images/about.png" alt="home page logo"
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
        <p>Company Registers</p>
      </div>
      <div className="div1">
       <h2>150+</h2>
       <p>Project Done</p>
      </div>
      <div className="div1">
        <h2>250+</h2>
        <p>Happy Clients</p>

      </div>
      <div className="div1">
           <h2>650k+</h2>
           <p>Youtube Subscribers</p>
      </div>
    </div>
   </section>
    </div>
  )
}
