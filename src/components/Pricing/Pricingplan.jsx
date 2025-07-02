
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/pricingplan.css";


const services = [
    {
      name: "Web Development",
      features: ["Modern front-end frameworks", "Optimized for speed & SEO", "Secure and scalable solutions"],
      proFeatures: ["5 to 7 pages", "Database integration"],
      enterpriseFeatures: ["API integration", "Payment methods", "Hosting a website"]
    },
    {
      name: "Application Development",
      features: ["Cross-platform development", "High-performance applications", "User-friendly interfaces"],
      proFeatures: ["Advanced UI components", "Backend with Node.js & Firebase"],
      enterpriseFeatures: ["AI-driven analytics", "Payment methods", "Deployment", ]
    },
    {
      name: "UX/UI & Logo Designing",
      features: ["User-centered design", "Custom branding solutions", "Wireframing & prototyping"],
      proFeatures: ["High-fidelity prototypes", "Interactive UI elements"],
      enterpriseFeatures: ["Full UI/UX design system", "Complete brand identity package"]
    },
    {
      name: "Digital Marketing",
      features: ["SEO & content marketing", "Social media strategy", "Google & Social Media ads"],
      proFeatures: ["Advanced keyword research", "A/B testing for ads"],
      enterpriseFeatures: ["Multi-channel campaign automation", "Performance tracking dashboards"]
    },
    {
      name: "Machine Learning",
      features: ["Training basic models", "Binary classification tasks"],
      proFeatures: ["Model tuning & optimization", "Neural network training"],
      enterpriseFeatures: ["Integration with Flutter apps", "End-to-end ML pipeline"]
    },
    {
      name: "Automation",
      features: ["Python Scripts", "Workflow Automation"],
      proFeatures: ["Web scraping", "IP rotation"],
      enterpriseFeatures: ["AI-based task automation", "Auto-report generation"]
    }
  ];
  

const pricingPlans = [
  { name: "Standard", description: "Basic features for startups and small businesses", buttonText: "Talk to sales" },
  { name: "Pro", description: "Advanced features for growing businesses", buttonText: "Talk to sales" },
  { name: "Enterprise", description: "Comprehensive solutions for large organizations", buttonText: "Talk to sales" }
];

const PricingFeatureMatrix = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="container text-center section">
      <h1 className="fw-bold empheading">
        <span className="empowering-text">Product </span>
        Feature Matrix
      </h1>
      <h3 className="choosetxt">Choose Your Product</h3>
      
      <div className="d-flex justify-content-center flex-wrap my-4">
        {services.map((service, index) => (
          <button
            key={index}
            className={`btn mx-2 my-2 ${selectedService.name === service.name ? "btnclass" : "btn-outline-light"}`}
            onClick={() => setSelectedService(service)}
          >
          {service.name}
          </button>
        ))}
      </div>

      <h2 className="fw-bold text-white servicename">{selectedService.name}</h2>
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Features</th>
            <th>Standard</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>

        <tbody>
        {selectedService.features.map((feature, index) => (
        <tr key={index}>
        <td>{feature}</td>
        <td>✔</td> 
        <td>✔</td> 
        <td>✔</td> 
        </tr>
        ))}

      {selectedService.proFeatures.map((feature, index) => (
      <tr key={index}>
      <td>{feature}</td>
      <td>-</td>
      <td>✔</td>
      <td>✔</td>
      </tr>
      ))}

      {selectedService.enterpriseFeatures.map((feature, index) => (
      <tr key={index}>
      <td>{feature}</td>
      <td>-</td>
      <td>-</td>
      <td>✔</td>
      </tr>
      ))}
    </tbody>
    </table>
      
      <h2 className="fw-bold mt-5 text-white">Pricing Plans</h2>
      <div className="d-flex justify-content-center flex-wrap mt-3">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="card bg-dark text-light m-3 p-3" style={{ width: "18rem", border: "1px solid #fff" }}>
            <h4 className="fw-bold">{plan.name}</h4>
            <p>{plan.description}</p>
            <button className="btn btn-primary w-100">{plan.buttonText}</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PricingFeatureMatrix;
