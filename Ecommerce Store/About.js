import React from "react";
import Navbar from "./Navbar";
import "./About.css";

function About(){
    return(<>
    <Navbar/>
    <div className="P-About">
    <div class="container">
      <span>About Our Brand</span>
      <p>We are a company that is passionate about creating high-quality products that meet the needs and exceed the expectations of our customers. Our goal is to provide you with the best possible experience and make your life easier, whether you're at home, at work, or on the go.</p>
      <p>We take pride in our attention to detail and commitment to excellence, and we're constantly striving to improve and innovate. Our team is made up of dedicated professionals who are experts in their fields and share a common vision for success.</p>
      <p>When you choose our brand, you can trust that you're getting a product that is reliable, durable, and designed to last. We stand behind our products and are committed to providing exceptional customer service to ensure your complete satisfaction.</p>
    </div>
    </div>
    
    <div className="Testimonial-parrent">
    <div class="testimonial-container">
  <div class="testimonial">
  <img className="testimonial-image" src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="John Doe"></img>
    <h2>John Doe</h2>
    <p>"This company is amazing! Their products are top-notch and their customer service is exceptional. I would recommend them to anyone."</p>
  </div>
  <div class="testimonial">
  <img className="testimonial-image" src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="John Doe"></img>
    <h2>Jane Smith</h2>
    <p>"I had a fantastic experience with this company. The team was professional, knowledgeable, and very helpful. I would definitely use them again."</p>
  </div>
  <div class="testimonial">
  <img className="testimonial-image" src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="John Doe"></img>
    <h2>Tom Jones</h2>
    <p>"I was blown away by the quality of the products and the level of service I received. This company truly goes above and beyond for its customers."</p>
  </div>
</div>
</div>
    </>)
}
export default About ;