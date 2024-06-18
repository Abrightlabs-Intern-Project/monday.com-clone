import React from "react";
import { useState } from "react";
import "../../assets/styles/accordion.css";
import landingbdy1 from "../../assets/images/landingbdy1.png";
import landingbdy2 from "../../assets/images/landingbdy2.png";
import landingbdy3 from "../../assets/images/landingbdy3.png";

interface AccordionProps {
  title: string;
  content: string;
  image: string;
}

const Accordion: React.FC = () => {
  const features: AccordionProps[] = [
    {
      title: "Customize",
      content:
        "Tailor any product development process around your unique product strategy to best serve your development team’s needs.",
      image: landingbdy1,
    },
    {
      title: "Automate",
      content:
        "Automate everything from task assignments, notifications, and workflow integrations with your favorite tools, like Slack or GitHub.",
      image: landingbdy2,
    },
    {
      title: "Collaborate",
      content:
        "Align your entire organization on one collaborative platform that syncs across every department, ensuring all teams are moving forward.",
      image: landingbdy3,
    },
  ];
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div className="accordion container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="list text-white">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`list-item mb-3 text-start fs-4 ${
                  selectedFeature.title === feature.title ? "text-primary" : ""
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                {feature.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-5 col-md-8 col-sm-12">
          <h3 className="mb-2">{selectedFeature.title}</h3>
          <p className="mt-3 fs-5">{selectedFeature.content}</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={selectedFeature.image}
            alt={selectedFeature.title}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
