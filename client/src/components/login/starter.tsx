import "../../assets/styles/starter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Starter = () => {
  return (
    <div className="container starter ms-5">
      <div className="row">
        <div className="col-12 d-flex me-2">
          <div className="price me-2">
            <button className=" pricing btn btn-transparent">Pricing</button>
          </div>
          <div className="log me-2">
            <button className="btn btn-transparent ">Log In</button>
          </div>
          <div className="dev me-2">
            <button className=" btn contact-details">Contact Sales</button>
          </div>
          <div className="service me-5">
            <button className="btn btn-primary get-started">
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </button>
          </div>
          <div className="dev me-2">
            <button className=" btn contact-details">drop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;
