import "../../../styles/designservices.css";
import Howweework from "../../Home/Howwework";
import ProjectSlider from "../../Home/ProjectSlider";

function DevServices() {
    return (
        <>
            <div className="container mainsection">
                <div className="row text-center">
                    <div className="col-8 text-center designcol">
                        <h1 className="fw-bold empheading card mx-auto p-3">
                            <span className="empowering-text">Mobile, </span>
                            Web Application & Machine Learning
                        </h1>
                        <p className="text-white">
                            We specialize in building cross-platform mobile apps, modern web applications, and intelligent machine learning systems. From user-centric design to robust backend and AI integration — we deliver it all.
                        </p>
                        <button className="btn learn-more-btn">Hire Us Now</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Mobile Applications</h3>
                            <p>We develop fast, scalable cross-platform mobile apps for Android and iOS with elegant UI, high performance, and seamless integration capabilities.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Web Applications</h3>
                            <p>We build responsive, secure, and high-performing websites and web apps tailored to your business needs using modern frameworks and technologies.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Machine Learning</h3>
                            <p>We design and train accurate machine learning models using advanced algorithms and tuning techniques, delivering reliable real-world performance.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>ML Model Integration</h3>
                            <p>We integrate machine learning models into web and mobile apps, enabling real-time predictions, recommendations, and AI-powered user experiences.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>API Integration</h3>
                            <p>We connect apps with third-party APIs and services like payments, maps, CRMs, or AI, ensuring secure, smooth, and reliable interactions between systems.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Free Maintenance</h3>
                            <p>We provide one year of free maintenance for every software we build — covering bug fixes, minor updates, and priority support at no extra cost.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Software Deployment</h3>
                            <p>We handle full deployment of your applications to the web, Play Store, or App Store — including versioning, optimization, and release management.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Continuous Support</h3>
                            <p>Keep your app running smoothly with our ongoing optimization, updates, and improvements tailored to evolving market and business needs.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>
                </div>

                <Howweework />
                <ProjectSlider />
            </div>
        </>
    );
}

export default DevServices;
