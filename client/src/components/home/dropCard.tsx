// import React from "react";
// import "../../assets/styles/dropCard.css";
// import img from "../../assets/images/home-1.png";
// import dev from "../../assets/images/dev.jpeg";
// import crm from "../../assets/images/monday-crm.jpeg";
// import work from "../../assets/images/work.png";
// import { DropCardModal } from "../../interfaces/dropCardModal";
// import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const DropCard = () => {
//   const data: DropCardModal[] = [
//     {
//       image: img,
//       board: faFlipboard,
//       heading: "tasks",
//       logo: work,
//       content: " work management > Main ",
//     },
//     {
//       image: img,
//       board: faFlipboard,
//       heading: "Bugs Queues",
//       logo: dev,
//       content: " monday dev > My Team ",
//     },
//     {
//       image: img,
//       board: faFlipboard,
//       heading: "Contacts",
//       logo: crm,
//       content: " monday CRM  > CRM ",
//     },
//     {
//       image: img,
//       board: faFlipboard,
//       heading: "Sprints",
//       logo: dev,
//       content: " monday dev > My Team ",
//     },
//   ];
//   //console.log(data);
//   return (
//     <div className="card-container">
//       {data.map((item, index) => (
//         <div
//           className="cardHolder p-3"
//           key={index}
//           style={{
//             border: "2px solid black",
//             width: "30%",
//             minWidth: "300px",
//             marginBottom: "20px",
//           }}
//         >
//           <div className="cardHead mb-2">
//             <img src={item.image} alt="/" className=" img-fluid" />
//           </div>
//           <div className="row">
//             <div className="d-flex justify-content-between  ">
//               <div className="d-flex">
//                 <div className="">
//                   <FontAwesomeIcon icon={item.board} />
//                 </div>
//                 <div className="ms-2 me-5" style={{ whiteSpace: "nowrap" }}>
//                   <p style={{ display: "inline-block" }}> {item.heading}</p>
//                 </div>
//               </div>
//               <div className="">
//                 <FontAwesomeIcon icon={faStar} />
//               </div>
//             </div>
//           </div>
//           <div className="row d-flex">
//             <div className="d-flex">
//               <div className="" style={{ width: "20px" }}>
//                 <img src={item.logo} alt="/" className="img-fluid" />
//               </div>
//               <div className="ms-2">
//                 <p> {item.content}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DropCard;
import React from "react";
import "../../assets/styles/dropCard.css";
import img from "../../assets/images/home-1.png";
import dev from "../../assets/images/dev.jpeg";
import crm from "../../assets/images/monday-crm.jpeg";
import work from "../../assets/images/work.png";
import { DropCardModal } from "../../interfaces/dropCardModal";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DropCard = () => {
  const data: DropCardModal[] = [
    {
      image: img,
      board: faFlipboard,
      heading: "tasks",
      logo: work,
      content: " work management > Main ",
    },
    {
      image: img,
      board: faFlipboard,
      heading: "Bugs Queues",
      logo: dev,
      content: " monday dev > My Team ",
    },
    {
      image: img,
      board: faFlipboard,
      heading: "Contacts",
      logo: crm,
      content: " monday CRM  > CRM ",
    },
    {
      image: img,
      board: faFlipboard,
      heading: "Sprints",
      logo: dev,
      content: " monday dev > My Team ",
    },
  ];

  return (
    <div className="card-container row mt-2 HomeHolder ">
      {data.map((item, index) => (
        <div
          className="cardHolder col-md-3 p-3 me-1"
          key={index}
          style={{
            width: "250px",
            height: "250px",
            border: "1px solid white",
            marginBottom: "20px",
          }}
        >
          <div className="cardHead mb-2 ">
            <img src={item.image} alt="/" className=" img-fluid" />
          </div>
          <div className="row">
            <div className="d-flex justify-content-between  ">
              <div className="d-flex">
                <div className="">
                  <FontAwesomeIcon icon={item.board} />
                </div>
                <div className="ms-2 me-5" style={{ whiteSpace: "nowrap" }}>
                  <p style={{ display: "inline-block" }}> {item.heading}</p>
                </div>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="row d-flex">
            <div className="d-flex">
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
