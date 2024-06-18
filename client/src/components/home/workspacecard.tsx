import React from "react";
import "../../assets/styles/workspace.css";

import img1 from "../../assets/images/space1.png";
import img2 from "../../assets/images/space2.png";
import img3 from "../../assets/images/space3.png";

import dev from "../../assets/images/dev.jpeg";
import crm from "../../assets/images/monday-crm.jpeg";
import work from "../../assets/images/work.png";

const WorkSpaceCard = () => {
  const data = [
    {
      image: img1,
      space: "Main workspace",
      logo: work,
      product: "work management",
    },
    {
      image: img2,
      space: "CRM",
      logo: crm,
      product: "monday CRM",
    },
    {
      image: img3,
      space: "My Team",
      logo: dev,
      product: "monday Dev",
    },
  ];

  return (
    <div className="workspace-container container">
      <div className="row">
        {data.map((item, index) => (
          <div
            className="workspace-card col-lg-5 col-md-5 col-sm-12"
            key={index}
          >
            <div className="workspace-card-content">
              <img
                src={item.image}
                alt={item.space}
                className="workspace-image"
              />
              <div className="workspace-info">
                <p className="workspace-title">{item.space}</p>
                <div className="workspace-product">
                  <img
                    src={item.logo}
                    alt={item.product}
                    className="product-logo"
                  />
                  <p className="product-name">{item.product}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSpaceCard;
