import "./newheader.css"
import { Link } from "react-router-dom";
import logo from "../../assets/an2.png"

function Newheader() {

    return (
        <>
    <header className='menuheader'>
     <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* <a class="navbar-brand" href="#">Anorex</a> */}
          {/* <a class="navbar-brand" href="#">
             <img src={logo} alt="logo" width="90px" />
          </a> */}
          <Link className="navbar-brand" to='/'>
             <img src={logo} alt="logo" width={100} height={100} />
          </Link>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
           aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-white"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/pricing'>Pricing Plan</Link>
                    </li>
                    <li className="nav-item dropdown dropdown-mega position-static">

                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            Services
                        </a>
                        <div className="dropdown-menu shadow">
                            <div className="mega-content px-md-4">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                            <h5 className="heading">Design & Prototypes</h5>
                                            <div className="list-group">

                                                <Link className="list-group-item" to="/services/wireframe">Wireframe</Link>
                                                <Link className="list-group-item" to="/services/logo-branding">Logo Designing</Link>
                                                <Link className="list-group-item" to="/services/uiux-design">UI/UX Design</Link>

                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                        <h5 className="heading">Development</h5>
                                        <div className="list-group">

                                                <Link className="list-group-item" to="/services/mobile-development">Mobile App Development</Link>
                                                <Link className="list-group-item" to="/services/web-development">Web App Development</Link>
                                                <Link className="list-group-item" to="/services/ml">Machine Learning</Link>

                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                        <h5 className="heading">Digital Marketing</h5>
                                            <div className="list-group">

                                                <Link className="list-group-item" to="/services/social-media-ads">Social Media Ads</Link>
                                                <Link className="list-group-item" to="/services/social-media-strategies">Social Media Strategy</Link>
                                                <Link className="list-group-item" to="/services/seo-content-marketing">SEO & Content Marketing</Link>
                                             
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-sm-6 py-4 px-xl-5 px-4">
                                        <h5 className="heading">Our Policies</h5>
                                            <div className="list-group">
                                                <a className="list-group-item" href="#">Agreements</a>
                                                <a className="list-group-item" href="#">Terms and Conditions</a>
                                                <a className="list-group-item" href="#">Policies</a>


                                                {/* <Link to="/services/social-media">Social Media Ads</Link>
                                                <Link to="/services/social-media-strategy">Social Media Strategy</Link>
                                                <Link to="/services/seo-content">SEO & Content Marketing</Link> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/blog'>Blogs</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link " to='/about'>About Us</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>

                {/* <form class="d-flex ms-auto" role="search">
                    <div className="input-group">
                      <input class="form-control  border-0 me-0" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form> */}

         </div>
      </div>
     </nav>
    </header>

    </>)
    
}

export default Newheader;