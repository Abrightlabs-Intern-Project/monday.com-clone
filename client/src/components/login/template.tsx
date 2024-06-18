import React, { useState } from "react";
import "../../assets/styles/template.css";
import template1 from "../../assets/images/temaplate1.png";
import template2 from "../../assets/images/temaplate2.png";
import template3 from "../../assets/images/temaplate3.png";
import template4 from "../../assets/images/temaplate4.png";
import template5 from "../../assets/images/temaplate5.png";

interface TemplateData {
  image: string;
  title: string;
  text: string;
}

const Template: React.FC = () => {
  const data: TemplateData[] = [
    {
      image: template1,
      title: "Feature Request",
      text: "Easily Capture and manage key feature information",
    },
    {
      image: template2,
      title: "Roadmap",
      text: "Plan, prioritize and map your product vision and easily share it with stakeholders",
    },
    {
      image: template3,
      title: "Sprint Management",
      text: "Manage Sprint ceremonies, track story points, and progress in one place",
    },
    {
      image: template4,
      title: "Bug Tracking",
      text: "Effectively report, track and assign bugs to the right team members",
    },
    {
      image: template5,
      title: "Sprint Retrospective",
      text: "Structure feedback for continuous process improvement",
    },
  ];

  const [template, setTemplate] = useState(data[0]);

  return (
    <div className="text-white container">
      <div className="TemplateHolder text-center ">
        <div className="row justify-content-center ">
          {data.map((item, index) => (
            <div
              className="templateHead col-6 col-md-2 mb-4 p-2 fs-6 ms-2"
              key={index}
              onClick={() => setTemplate(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="templateImage row justify-content-center mb-4">
          <img
            src={template.image}
            alt={template.title}
            className="img-fluid"
          />
        </div>
        <div className="templateText fs-4">{template.text}</div>
      </div>
    </div>
  );
};

export default Template;
