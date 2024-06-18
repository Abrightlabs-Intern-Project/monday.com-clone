import React from "react";
import "../../assets/styles/feature.css";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
interface Feature {
  image: string;
  head: string;
  body: string;
  link: string;
}
const Feature = () => {
  const data: Feature[] = [
    {
      image: img2,
      head: "GitHub integration",
      body: "Easily connect your repositories and pull requests.",
      link: "Learn More",
    },
    {
      image: img3,
      head: "GitLab integration",
      body: "Connect your GitLab issues with monday.com items easily.",
      link: "Learn More",
    },
    {
      image: img4,
      head: "Figma embedded",
      body: "Embed your designs right into your monday.com views.",
      link: "Learn More",
    },

    {
      image: img1,
      head: "100+ Apps",
      body: "Supercharge monday dev with custom-built apps.",
      link: "Learn More",
    },
  ];
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="fcard">
            <img src={item.image} className="img-fluid mb-5" alt={item.head} />
            <div className="fcard-body text-center  ">
              <h5 className="fcard-title mb-5">{item.head}</h5>
              <p className="fcard-text mb-5">{item.body}</p>
              <a href="#" className="btn text-white">
                {item.link}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
