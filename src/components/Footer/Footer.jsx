import "../../styles/footer.css"


function Footer() {

    return (
        <>
            {
                <footer className="footer-distributed">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-left">
                                    <h3>Anorex<span></span></h3>
                                    <p className="footer-links">
                                        <a href="#" className="link-1">Home</a>
                                        {/* <a href="#">Services</a> */}
                                        <a href="#">Talk To Sale</a>
                                        <a href="#">About-US</a>
                                        <a href="#">Pricing</a>
                                    </p>
                                    <p className="footer-company-name">Anorex software solution</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="footer-center">
                                    <div>
                                        <i className="fa fa-map-marker"></i>
                                        <p><span>Peshawar-Rwp</span> Pakistan</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-phone"></i>
                                        <p>+92310-4146002</p>
                                        {/* <p><span>+923104146002</span> +923184146002</p> */}

                                    </div>

                                    <div>
                                        <i className="fa fa-phone"></i>
                                        <p>+92310-4146002</p>
                                        {/* <p><span>+923104146002</span> +923184146002</p> */}

                                    </div>
                                    

                                    {/* <div>
                                        <i className="fa fa-envelope"></i>
                                        <p><a href="mailto:umairahmad33.ua@gmail.com">hianorex@gmail.com</a></p>
                                    </div> */}

                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="footer-right">

                                    <p className="footer-company-about">
                                        <span>About us</span>
                                        {/* Our team of experienced travel experts has carefully curated a list of the best places to visit in Pakistan,
                                        taking into consideration your interests and budget. */}
                                        We are a passionate team of developers, designers, and strategists dedicated to building high-quality software solutions. we transform ideas into reality
                                        </p>

                                    <div className="footer-icons">

                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                        <a href="https://www.instagram.com/withinmylens_9.9/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-whatsapp"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

            }
        </>
    )

}

export default Footer;