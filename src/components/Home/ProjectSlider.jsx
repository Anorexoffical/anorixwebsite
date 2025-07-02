import { Carousel } from "react-bootstrap";
import "../../styles/projectslider.css";
import sliderimg from "../../assets/project1.png";
import sliderimg2 from "../../assets/project2.png";
import sliderimg3 from "../../assets/project3.png";
import sliderimg4 from "../../assets/project4.png";

const projects = [
  {
    title: "iCell Mobile Website",
    description:
      "The iCell Mobile website is a modern e-commerce platform that enables users to easily purchase SIM cards, mobile accessories, and stay up to date with the latest packages and updates. Designed for performance and simplicity, the website features a seamless customer experience from product browsing to checkout. A dedicated support section assists users in SIM activation and package selection, while an integrated blog keeps customers informed about new offers, updates, and tech news.",
    bullets: [
     "High Performance",
"Optimized for speed and reliability across all devices to ensure smooth browsing and shopping experiences.",

"User-Friendly Interface",
"Clean and intuitive design that makes it easy for customers to explore products, choose packages, and complete purchases effortlessly.",

"Scalable Architecture",
"Built to grow with the business, allowing future integration of new services, promotional tools, and customer engagement features.",
    ],
    image: sliderimg,
  },
  {
    title: " AI Skin Disease Detection App",
    description:
      "This innovative mobile application leverages artificial intelligence to assist users in identifying potential skin diseases with just a photo upload. By analyzing the uploaded skin image, the AI system detects and classifies the condition with high accuracy. Once a diagnosis is provided, the app recommends nearby dermatologists or skin specialists for expert consultation. Designed with privacy and accuracy in mind, the app aims to provide fast, accessible, and trustworthy skin health insights to users.",
    bullets: [
        "AI-Powered Skin Analysis",
    "Utilizes advanced machine learning models to detect and classify skin diseases from uploaded photos within seconds.",

    "Smart Doctor Recommendations",
    "Recommends the most suitable nearby dermatologists based on the detected condition and the user’s location.",

    "User-Centric Design",
    "Simple and intuitive interface allowing users to upload images, receive results, and find doctors with minimal effort.",
    ],
    image: sliderimg2,
  },
   {
    title: "E-Commerce Mobile Application",
    description:
      "The Commerce mobile application is a full-featured e-commerce platform designed to deliver a smooth and efficient online shopping experience. Customers can easily browse a wide range of products, securely log in to their accounts, make purchases, and receive customer support — all from one app. On the administrative side, the app includes a powerful backend panel to manage product listings, orders, customer data, and support interactions, ensuring complete operational control ",
    bullets: [
      "Secure Login System",
"Enables users to register and log in with secure authentication protocols, ensuring privacy and data protection.",

    "Admin Panel for Full Control",
    "A feature-rich admin dashboard to manage products, monitor orders, track inventory, and handle customer interactions.",

    "Customer Support Integration",
    "Offers real-time support for users through live chat or help tickets, improving trust and satisfaction.",

    "Optimized Shopping Experience",
    "Designed with a clean UI and fast performance, allowing users to search, filter, and buy products quickly and easily.",
    ],
    image: sliderimg3,
  },
   {
    title: "Brain Tumor Detection",
    description:
      "This mobile application is built to assist users in the early detection of brain tumors using artificial intelligence. By uploading an MRI scan, the app analyzes the image and identifies the presence and type of brain tumor—such as glioma, meningioma, or pituitary tumor. The application also recommends top neurologists and neurosurgeons nearby for further diagnosis or treatment, providing users with quick access to medical support.",
    bullets: [
     "AI-Based MRI Analysis",
"Uses deep learning models to accurately analyze uploaded MRI scans and detect tumor type within seconds.",

"Specialist Doctor Recommendation",
"Recommends verified nearby neurologists or brain specialists based on the detected tumor type and user location.",

"Easy-to-Use Interface",
"A simple and intuitive design that allows users to upload scans, view results, and get doctor suggestions with minimal effort.",

"Fast & Confidential",
"Ensures quick processing of MRI images while maintaining full privacy and confidentiality of user health data.",

    ],
    image: sliderimg4,
  },

];

function ProjectSlider() {
  return (
    <section className="container py-5 project-slider-section">
      
      <Carousel interval={4000} pause="hover">
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="row align-items-centre">

              <div className="col-md-4 text-section text-md-5"
                    //  style={{border:"2px solid red"}}
              >  
              <h2 className="text-left fw-bold mb-4 project-heading">
              <span className="gradient-text">Our </span> Recent Projects
              </h2>
                <h3 className="fw-bold project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="bullet-list">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="col-md-8 text-center img-section"
                    // style={{border:"2px solid red"}}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default ProjectSlider;



