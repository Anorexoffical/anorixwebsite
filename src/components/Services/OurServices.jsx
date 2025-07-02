import React from "react";
import "../../styles/ourservices.css";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive and scalable web applications using the latest technologies.",
    bullets: [
      "Modern front-end frameworks",
      "Optimized for speed & SEO",
      "Secure and scalable solutions",
    ],
  },
  {
    title: "Application Development",
    description:
      "We create mobile apps that deliver smooth user experiences across devices.",
    bullets: [
      "Cross-platform development",
      "High-performance applications",
      "User-friendly interfaces",
    ],
  },
  {
    title: "UX/UI & Logo Designing",
    description:
      "We craft engaging user interfaces and brand identities that stand out.",
    bullets: [
      "User-centered design",
      "Custom branding solutions",
      "Wireframing & prototyping",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "We help brands grow through SEO, social media, and paid advertising.",
    bullets: [
      "SEO & content marketing",
      "Social media strategy",
      "Google & Facebook ads",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "We develop AI solutions for predictive analytics and automation.",
    bullets: [
      "Data-driven insights",
      "Deep learning models",
      "Custom AI solutions",
    ],
  },

  {
    title: "Automation",
    description: "Automating business processes for efficiency and python scripts.",
    bullets: [
      "Python Scripts",
      "Workflow Automation",
      "AI-based Automation",
    ],
  },
];

const OurServices = () => {
  return (
    <section className="services-section container py-5">
      {/* Heading and description */}
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h2 className="section-title fw-bold">
            Services
          </h2>
          <p className="section-description">
            We offer a wide range of services to help businesses grow and innovate.
          </p>
        </div>

        <div className="col-md-4 text-md-start text-center">
          <button className="btn learn-more-btn">Learn More</button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <div key={index} className="col">
            <div className="service-card h-100 d-flex flex-column">
              <div className="flex-grow-1">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-bullets">
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <button className="btn learn-more-btn mt-auto">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
