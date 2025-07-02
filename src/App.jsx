import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Newheader from "./components/Header/Newheader";
import PricingFeatureMatrix from "./components/Pricing/Pricingplan";
import AboutUs from "./components/About/Aboutus";
import DesignServices from "./components/Services/Designing/DesignServices";
import DevServices from "./components/Services/Development/DevServices";
import DigitalServices from "./components/Services/DigitalMaketing/DigitalServices";


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Newheader/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/uiux-design" element={<DesignServices />} />
        <Route path="/services/logo-branding" element={<DesignServices />} />
        <Route path="/services/wireframe" element={<DesignServices />} />

        <Route path ="services/mobile-development" element={<DevServices/>}/>
        <Route path ="services/web-development" element={<DevServices/>}/>
        <Route path ="services/ml" element={<DevServices/>}/>

        <Route path ="services/social-media-ads" element={<DigitalServices/>}/>
        <Route path ="services/social-media-strategies" element={<DigitalServices/>}/>
        <Route path ="services/seo-content-marketing" element={<DigitalServices/>}/>


        <Route path="/pricing" element={<PricingFeatureMatrix/>} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
