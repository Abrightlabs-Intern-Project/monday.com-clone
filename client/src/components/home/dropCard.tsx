import "../../assets/styles/dropCard.css";
import img from "../../assets/images/home-1.png";
import dev from "../../assets/images/dev.jpeg";
import { DropCardModal } from "../../interfaces/DropCardModal";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const DropCard = () => {
  const navigate = useNavigate();
  const data: DropCardModal[] = [
    {
      image: img,
      board: faFlipboard,
      heading: "tasks",
      logo: dev,
      navigate: "/task",
      content: " monday dev > tasks ",
    },
    {
      image: img,
      board: faFlipboard,
      heading: "My work",
      logo: dev,
      navigate: "/work",
      content: " monday Dev  > My Work ",
    },
    {
      image: img,
      board: faFlipboard,
      heading: "Sprints",
      logo: dev,
      navigate: "/sprint",
      content: " monday dev > Sprints ",
    },
  ];

  return (
    <div
      className="card-container row mt-2 HomeHolder"
      style={{
        background: "#181B34",
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      {data.map((item, index) => (
        <div
          className="cardHolder col-md-3 p-3 me-4"
          key={index}
          style={{
            width: "250px",
            height: "250px",
            border: "1px solid white",
            marginBottom: "20px",
          }}
          onClick={() => navigate(item.navigate)}
        >
          <div className="cardHead mb-2">
            <img src={item.image} alt="/" className="img-fluid" />
          </div>
          <div className="row">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div>
                  <FontAwesomeIcon icon={item.board} />
                </div>
                <div className="ms-2 me-5" style={{ whiteSpace: "nowrap" }}>
                  <p style={{ display: "inline-block" }}>{item.heading}</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div
              className="d-flex"
              style={{ whiteSpace: "nowrap", fontSize: "12px" }}
            >
              <div className="" style={{ width: "20px" }}>
                <img src={item.logo} alt="/" className="img-fluid" />
              </div>
              <div className="ms-2">
                <p> {item.content}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropCard;
