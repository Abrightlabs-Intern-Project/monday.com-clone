import "../../assets/styles/landingPage.css";
import landingImg1 from "../../assets/images/landingimg1.png";
import review from "../../assets/images/review.png";
import CardContainer from "./cardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Accordion from "./accordion";
import Feature from "./feature";
import Template from "./template";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="Devheader">
          <div className="row  w-100">
            <p className="headerText mt-5 mb-5">
              Empower your R&D teams to
              <br /> build better products
            </p>
          </div>
          <div className="row w-100">
            <p className="headerSubText fs-5 text-white">
              From product strategy to launch, manage it all with one flexible
              platform.
            </p>
          </div>
          <div className="row w-100 ">
            <p className="fw-bold text-white">What would you like to manage?</p>
            <div className="mb-4">
              <CardContainer />
            </div>
            <div className="text-white">
              <button className=" started">
                Get Started
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrow text-black"
                />
              </button>
            </div>
            <div className="text-white mt-3">
              <p>No credit card needed ✦ Start your free trial</p>
            </div>
          </div>
        </div>
        <div className="devBody">
          <div className="">
            <img src={landingImg1} alt="landing" className="img-fluid" />
          </div>
          <div className="fw-bold text-white fs-1 mb-5">
            <p>Accelerate the journey from conceptualization to launch</p>
          </div>
          <div className="text-white mt-5">
            <Accordion />
          </div>
          <div className="w-100 bcg mt-5 mb-5">
            <img src={review} alt="review" className="img-fluid" />
          </div>
        </div>
        <div className="devAdvantage">
          <div className="advHead text-white fw-bolder">
            <p>Unlock the power of monday dev</p>
          </div>
          <div className="mt-3 text-white mb-5">
            <p className="fs-4 fw-light">
              Get exactly what you need out of your work software with 200+
              integrations and apps built specifically for monday.com
            </p>
          </div>
          <div className="text-white">
            <Feature />
          </div>
        </div>
        <div className="devFooter text-white mt-5">
          <div className="fw-bolder footerText">
            <p>
              All the templates you need for <br />
              agile workflows
            </p>
          </div>
          <div className="template text-white mt-5">
            <Template />
          </div>
          <div className="footer mt-5">
            <div className="footerImage">
              <img
                src={require("../../assets/images/devfooter.png")}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="mt-5 Foot">
            <div className="mb-4"></div>
            <div className="footerText mt-4">
              <p>Deliver better products faster with monday dev</p>
            </div>
            <div>
              <button className="started mb-4">
                Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
/**/
