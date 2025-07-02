import "../../../styles/designservices.css"
import Howweework from "../../Home/Howwework"
import ProjectSlider from "../../Home/ProjectSlider"

function DesignServices() {
    return (
        <>
            <div className="container  mainsection">

                <div className="row text-center">
                    <div className="col-8 text-center designcol"
                    // style={{border:"2px solid red"}}
                    >
                        <h1 className="fw-bold empheading card mx-auto p-3">
                            <span className="empowering-text">Logo Designing,   </span>
                            UX/UI Designing & Wireframe   
                        </h1>
                        <p className="text-white ">
                            Your brand deserves more than just a design—it needs a story. We create intuitive interfaces and standout visuals that tell yours.
                        </p>
                        <button className="btn learn-more-btn">Hire Us Now</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Creative Logo Design</h3>
                            <p>Craft a unique identity with custom logos that leave a lasting impression and define your brand's personality.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">                            
                            <h3>UI/UX Design</h3>
                            <p>Transform ideas into visually stunning and user-friendly designs that enhance engagement and usability.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Wireframing & Prototypes</h3>
                            <p>Visualize your ideas with structured wireframes and interactive prototypes for better product planning.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 carddiv">
                        <div className="info-card d-flex flex-column h-100">
                            <h3>Continuous Support</h3>
                            <p>Keep your designs optimized with ongoing updates and improvements to meet evolving business needs.</p>
                            <button className="btn view-more-btn">Learn More →</button>
                        </div>
                    </div>
                </div>

                <Howweework/>
                <ProjectSlider/>



            </div>


        </>
    )


}

export default DesignServices