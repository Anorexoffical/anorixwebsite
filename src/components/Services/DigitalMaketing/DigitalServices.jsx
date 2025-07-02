import "../../../styles/designservices.css";
import Howweework from "../../Home/Howwework";
import ProjectSlider from "../../Home/ProjectSlider";

function DigitalServices() {
    return (
        <>
            <div className="container mainsection">
                <div className="row text-center">
                    <div className="col-8 text-center designcol">
                        <h1 className="fw-bold empheading card mx-auto p-3">
                            <span className="empowering-text">Social Media Ads, </span>
                            Strategies, SEO And Content Marketing
                        </h1>
                        <p className="text-white">
                            We help brands grow online with targeted social media ads, result-driven strategies, SEO optimization, and impactful content marketing. Our digital services are built to attract, engage, and convert your ideal audience.
                        </p>
                        <button className="btn learn-more-btn">Hire Us Now</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Social Media Ads</h3>
                            <p>
                                We create high-converting ads for platforms like Facebook, Instagram, and LinkedIn, tailored to reach your target audience and maximize ROI through creative visuals and precise targeting.
                            </p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Social Media Strategies</h3>
                            <p>
                                Our expert strategies align with your business goals — helping you grow organically, increase engagement, and build a strong brand presence across all major social platforms.
                            </p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Search Engine Optimization</h3>
                            <p>
                                We optimize your website content, structure, and keywords to rank higher on Google, drive more organic traffic, and increase your visibility in search engine results.
                            </p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Content Marketing</h3>
                            <p>
                                We create valuable content that educates, engages, and builds trust with your audience — from blogs and articles to videos and social posts that convert viewers into loyal customers.
                            </p>
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

export default DigitalServices;
