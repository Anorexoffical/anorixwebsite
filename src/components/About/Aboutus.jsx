import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/aboutus.css"


import umairpic3 from "../../assets/umairpic3.jpeg"
import wisalpic1 from "../../assets/wisalpic1.png"
import alihaiderpic from "../../assets/haider6.png"


import Howweework from "../Home/Howwework";



const AboutUs = () => {
  return (
    <>
    <div className="container  sectionabout">

      <div className="row text-center">
        <div className="col-8 text-center aboutemp">
          <h1 className="fw-bold empheading">
          <span className="empowering-text">Empowering  </span> 
            Businesses with Technology
          </h1>
          <p className="lead text-white ">
            We are a passionate team of developers, designers, and strategists
            dedicated to building high-quality software solutions. From web
            development to AI-driven automation, we transform ideas into
            reality.
          </p>
        </div>
      </div>

      
      <div className="row  sec2">
         <div className="col-md-6 text-center ">
          <h3 className="fw-bold empowering-text ">
             Our Mission 
          </h3>
          <h5 className="mission">             
            "Helping Organizations Grow Better"
          </h5>
          <p className="lead paratxt">
            We believe not just in growing bigger, but in growing better. Growing better
            means aligning the success of our business with the success of our customers – 
            a true win-win!
          </p>
          <h5 className="cardinno">
             4 years of Innovation
          </h5>
         </div>

         <div className="col-md-6 text-center  ">
          <h3 className="fw-bold empowering-text ">Our Story</h3>
          <p className="lead paratxt">
            It all started four years ago when three university batchmates and friends, 
            driven by a shared passion for technology, decided to embark on a journey of
            innovation. What began as a friendship turned into a mission—to help businesses
            scale, automate, and achieve new heights through cutting-edge solutions. Today, 
            we continue to push boundaries, creating a future where technology empowers growth.
          </p>
         </div>
      </div>

        {/* Row 4: Leadership */}
      <div className="  row text-center">
        <div className="col ourleader">
          <h2 className="fw-bold">Our Leadership</h2>
        </div>
      </div>
     <div className="row text-center justify-content-center">

    <div className="col-md-4">
     <div className="card shadow-sm p-3 mx-auto" style={{ overflow: "hidden" }}>
      <img
        src={umairpic3}
        className="card-img-top mx-auto"
        alt="CEO"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-white">Umair Ahmad</h5>
        <p className=" founder">CTO & Co-Founder</p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card shadow-sm p-3 mx-auto" style={{ overflow: "hidden" }}>
      <img
        src={wisalpic1}
        className="card-img-top mx-auto"
        alt="Co-Founder"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-white">Wisal Malik</h5>
        <p className="founder">CEO & Co-Founder</p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card shadow-sm p-3 mx-auto" style={{ overflow: "hidden" }}>
      <img
        src={alihaiderpic}
        className="card-img-top mx-auto"
        alt="Co-Founder"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-white">Ali Haider</h5>
        <p className=" founder">COO & Co-Founder</p>
      </div>
    </div>
  </div>

  </div>

  </div>
  <Howweework/>
  </>
  );
};

export default AboutUs;
