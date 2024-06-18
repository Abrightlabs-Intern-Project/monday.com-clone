import React, { useState } from "react";
import "../../assets/styles/workMarketing.css";
import workLogo from "../../assets/images/workheader.png";
import wmheader from "../../assets/images/wmheader.png";
import wmabout1 from "../../assets/images/wmabout1.png";
import wmabout2 from "../../assets/images/wmabout2.png";
import wmabout3 from "../../assets/images/wmabout3.png";
import wmabout4 from "../../assets/images/wmabout4.png";
import wmabout5 from "../../assets/images/wmabout5.png";
import wmabout6 from "../../assets/images/wmabout6.png";
import wmadv1 from "../../assets/images/wmadv1.png";
import wmadv2 from "../../assets/images/wmadv2.png";
import wmadv3 from "../../assets/images/wmadv3.png";
import wmadv4 from "../../assets/images/wmadv4.png";
import wmadv5 from "../../assets/images/wmadv5.png";
import wmfeature1 from "../../assets/images/wmfeature1.png";
import wmfeature2 from "../../assets/images/wmfeature2.png";
import wmfeature3 from "../../assets/images/wmfeature3.png";
import wmfeature4 from "../../assets/images/wmfeature4.png";
import wmfeature5 from "../../assets/images/wmfeature5.png";
import wmfeature6 from "../../assets/images/wmfeature6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface HeaderData {
  title: string;
  image: string;
}

const WorkMarketing = () => {
  const headerData: HeaderData[] = [
    { title: "Content & design requests", image: wmabout1 },
    { title: "Event management", image: wmabout2 },
    { title: "Strategic planning", image: wmabout3 },
    { title: "Digital asset management", image: wmabout4 },
    { title: "Campaign tracking", image: wmabout5 },
    { title: "Content calendar", image: wmabout6 },
  ];

  const features = [
    {
      title: "Asset management",
      description:
        "Store, organize, and share all marketing digital assets in one place, and view files in the context of your work. Collaborate with internal and external stakeholders in one place.",
      image: wmfeature1,
    },
    {
      title: "Annotations",
      description:
        "Collaborate with your team by adding comments and annotations directly on your digital assets.",
      image: wmfeature2,
    },
    {
      title: "File versioning",
      description:
        "Keep track of different versions of your files and ensure you're always working with the latest version.",
      image: wmfeature3,
    },
    {
      title: "Robust Gantt",
      description:
        "Manage your projects with robust Gantt charts that help you visualize your timelines and dependencies.",
      image: wmfeature4,
    },
    {
      title: "Marketing automations",
      description:
        "Automate your marketing workflows to save time and increase efficiency.",
      image: wmfeature5,
    },
    {
      title: "Proofing",
      description:
        "Streamline the proofing process with online proofing tools that facilitate feedback and approvals.",
      image: wmfeature6,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleButtonClick = (title: string, image: string) => {
    setImage(image);
    setTitle(title);
  };
  const [image, setImage] = useState<string>(headerData[0].image);
  const [title, setTitle] = useState<string>(headerData[0].title);
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div className="container">
      <div className="headerHolder mt-2">
        <div>
          <img src={workLogo} alt="logo" />
        </div>
        <div className="marketingHeaderText  fw-bolder mt-2">
          <p className="mt-3">
            One place to manage
            <br /> <span className="text">marketing and creative</span> work
          </p>
        </div>
        <div className="mb-4 ">
          <p className="fst-normal fs-4 ">
            Streamline and optimize your marketing work management
            <br /> processes together at scale — from idea to delivery for
            maximum efficiency.
          </p>
        </div>

        <div className=" fw-bolder mb-3 fs-4 ">
          <p>What would you like to work on?</p>
        </div>
        <div className="row d-flex mb-2">
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Content calender</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Marketing projects</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder ">Client projects</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Assest management</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Campaign management</div>
          </div>
        </div>
        <div className="row d-flex secondRow mb-4">
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Marketing strategy</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2 ">
            <div className="contentHolder">Content & creative request</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2 ms-5">
            <div className="contentHolder">Event managments</div>
          </div>
          <div className="col-2 col-md-2 col-sm-2">
            <div className="contentHolder">Create your own</div>
          </div>
        </div>
        <div className="getStarted">
          <button className="WMG p-2">
            Get started
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </button>
        </div>
        <div className="row w-100 m-0 ">
          <img src={wmheader} alt="/" className="img-fluid" />
        </div>
      </div>
      <div className="aboutHolder mt-5 ">
        <div className="mb-4">
          <div className="aboutHeader fw-bolder mb-2">
            Everything marketing teams <br />
            need to
            <span className="text"> reach goals faster</span>
          </div>
          <div className="fst-normal fs-5 fw-lighter mb-5">
            See how your marketing strategies and goals all connect to the work
            being
            <br /> done across teams.
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-3 col-md-3 col-sm-12 me-5">
            <ul className="list">
              {headerData.map((data, index) => (
                <li
                  key={index}
                  className={`listItem mb-5 ${
                    title === data.title ? "text-primary" : ""
                  }`}
                  onClick={() => handleButtonClick(data.title, data.image)}
                >
                  {data.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-6 col-md-6 col-sm-12 aboutImageHolder w-50">
            <img src={image} alt="/" className="aboutImage img-fluid" />
          </div>
        </div>
      </div>
      <div className="prosHolder mb-5">
        <div className="fw-bolder fs-1 mb-5 mt-5">
          Streamline the entire <span className="text">process</span>.
          <br /> From idea to delivery and beyond.
        </div>
        <Slider {...settings}>
          <div className="sliderContainer p-3 ms-2">
            <p className="text-start prosNum">01</p>
            <p className="text-start prosHead fw-bolder fs-2">
              <span className="text"> Set</span> goals <br /> & strategy
            </p>
            <p className="text-start prosBody fs-4">
              Work collaboratively with internal and external stakeholders to
              define high-level marketing goals.
            </p>
            <div className="prosImageHolder">
              <img src={wmadv1} alt="/" className="img-fluid" />
            </div>
          </div>
          <div className="sliderContainer p-3 ms-2">
            <p className="text- prosNum text-start">02</p>
            <p className="text-start fw-bolder fs-2">
              <span className="text"> plan</span> project goals , <br />
              task & resources
            </p>
            <p className="text-start fs-4">
              Plan team work, assess team capacity, and assign tasks based on
              defined goals, set the goals and finish them.
            </p>
            <div className="prosImageHolder">
              <img src={wmadv2} alt="/" className="img-fluid" />
            </div>
          </div>
          <div className="sliderContainer p-3 ms-2">
            <p className="text-start prosNum">03</p>
            <p className="text-start fw-bolder fs-2">
              <span className="text"> Execute </span> work
              <br /> efficiently
            </p>
            <p className="text-start fs-4">
              Turn plans into action by viewing work processes in context with
              Kanban, Gantt charts, timelines, and more.
            </p>
            <div className="prosImageHolder">
              <img src={wmadv3} alt="/" className="img-fluid" />
            </div>
          </div>
          <div className="sliderContainer p-3 ms-2">
            <p className="text-start prosNum">04</p>
            <p className="text-start fw-bolder fs-2">
              <span className="text"> Deliver </span> ont time <br /> & within
              budget
            </p>
            <p className="text-start fs-4">
              Stay on top of project status, timelines, bottlenecks, and budgets
              to make sure deliverables are on time.
            </p>
            <div className="prosImageHolder">
              <img src={wmadv4} alt="/" className="img-fluid" />
            </div>
          </div>
          <div className="sliderContainer p-3 ms-2">
            <p className="text-start prosNum">05</p>
            <p className="text-start fw-bolder fs-2">
              <span className="text"> Measure</span> <br /> maketing impact
            </p>
            <p className="text-start fs-4 ms-2">
              Analyze and optimize campaign performance directly within
              monday.come with integrations.
            </p>
            <div className="prosImageHolder">
              <img src={wmadv5} alt="/" className="img-fluid" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="featureContainer ">
        <div className="row mt-4">
          <div className="col-12">
            <div className="featureHeader fw-bolder fs-1">
              The <span className="text">features</span> you need to power your
              work
            </div>
          </div>
          <div className=" col-3 col-md-3 col-sm-6">
            <ul className="list">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`list-tem mb-2 text-start  ${
                    selectedFeature.title === feature.title
                      ? "text-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                >
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
          <div className=" col-5 col-md-5 col-sm-6">
            <h3>{selectedFeature.title}</h3>
            <p>{selectedFeature.description}</p>
          </div>
          <div className=" col-4 col-md-4 col-sm-12">
            <img
              src={selectedFeature.image}
              alt={selectedFeature.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkMarketing;
