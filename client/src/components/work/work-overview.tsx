// import "../../assets/styles/workOverview.css";
// import feedback from "../../assets/images/feedback.png";
// import performance1 from "../../assets/images/performance1.png";
// import Performance2 from "../../assets/images/performance2.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBarChart,
//   faChartSimple,
//   faClipboard,
//   faClipboardList,
//   faCubesStacked,
// } from "@fortawesome/free-solid-svg-icons";
// import { faBullseye } from "@fortawesome/free-solid-svg-icons";
// import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { faListCheck } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// interface Feature {
//   heading: string;
//   subheading: string;
//   body: string;
//   image: string;
// }
// const NextArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", right: "10px", zIndex: "1" }}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
//       onClick={onClick}
//     />
//   );
// };

// const WorkOverview = () => {
//   const data: Feature[] = [
//     {
//       heading: "Views",
//       subheading: "See Work your Way",
//       body: "Choose how you visualize tasks and  projects based on your workflows with 10+ views such as Gantt and Kanban",
//       image: "/feature5.png",
//     },
//     {
//       heading: "Dashboards",
//       subheading: "Make better decision",
//       body: "Make more informed decisions with eral-time Dashboards.Choose from 30+ widgets to dsiplay specific info.",
//       image: "/feature6.png",
//     },
//     {
//       heading: "Custom Workflows",
//       subheading: "Adapts to you",
//       body: "with no-code building blocks, create a workflow for any part of your work and business needs.",
//       image: "/feature1.png",
//     },
//     {
//       heading: "Automations",
//       subheading: "Get more done",
//       body: "Choose from over 200+ pre-built automation recipies to improve efficiency across your walk",
//       image: "/feature2.png",
//     },
//     {
//       heading: "Intergration & Add-one",
//       subheading: "Centralize your work",
//       body: "Connect tools you rely on for work into one place , and extend the platform capabilities with add-ons",
//       image: "/feature3.png",
//     },
//   ];
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="container">
//       <div className=" row headerContainer mb-2">
//         <p className="text-wrap">
//           All aspects of work in one complete solution
//         </p>
//       </div>
//       <div className=" row textContainer mt-5 mb-3">
//         <p className="h4">
//           monday work management allows teams to focus on executing tasks,
//           projects, and processes efficiently and achieve shared goals at scale.
//         </p>
//       </div>
//       <div className="row optionContainer d-flex ">
//         <div className="mb-2">
//           <h5 className="fw-bolder ">What would you like to work on?</h5>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p className="icon">
//               <FontAwesomeIcon icon={faClipboardList} />
//             </p>
//             <p className="text">Project management</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p className="icon">
//               <FontAwesomeIcon icon={faListCheck} />
//             </p>
//             <p className="text">Task management</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p className="icon">
//               <FontAwesomeIcon icon={faUser} />
//             </p>
//             <p>Client&nbsp;&nbsp;&nbsp; projects</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faSquareCaretUp} />
//             </p>
//             <p>Business Operation</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faBarChart} />
//             </p>
//             <p>Resource management</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faChartSimple} />
//             </p>
//             <p>Portfolio management</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faBullseye} />
//             </p>
//             <p>Goals & Strategy</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faClipboard} />
//             </p>
//             <p>Request & Approvals</p>
//           </div>
//         </div>
//         <div className="col-1 cardHolder">
//           <div className="card">
//             <p>
//               <FontAwesomeIcon icon={faCubesStacked} />
//             </p>
//             <p>Create your Own</p>
//           </div>
//         </div>
//       </div>
//       <div className="feedback mt-3 mb-5">
//         <img src={feedback} alt="feedback" className="feedbackImage"></img>
//       </div>
//       <div className="PerformanceHolder mb-5">
//         <img src={performance1} alt="feedback" className="feedbackImage"></img>
//         <img src={Performance2} alt="feedback" className="feedbackImage"></img>
//       </div>
//       <div className="featureHolder">
//         <div className="featureHeader mb-2">
//           Everything you need to power the core of your work
//         </div>
//         <div className="featureBody">
//           <p className="mb-3">
//             Get started with features designed to build powerful workflows to
//             support your unique needs.
//           </p>
//           <div className="mt-4">
//             <Slider {...settings}>
//               {data.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="sliderContainer"
//                   style={{ marginLeft: "100px" }}
//                 >
//                   <p className="sliderHeading mb-3  mt-2 text-start">
//                     {feature.heading}
//                   </p>
//                   <h3 className="sliderSub mb-3 text-start">
//                     {feature.subheading}
//                   </h3>
//                   <p className="sliderBody fs-5 fw-lighter mb-5 text-start">
//                     {feature.body}
//                   </p>
//                   <img
//                     src={require(`../../assets/images${feature.image}`)}
//                     alt={feature.heading}
//                     className="sliderImage mt-4"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkOverview;
import "../../assets/styles/workOverview.css";
import feedback from "../../assets/images/feedback.png";
import performance1 from "../../assets/images/performance1.png";
import Performance2 from "../../assets/images/performance2.png";
import finally1 from "../../assets/images/finally1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBarChart,
  faChartSimple,
  faClipboard,
  faClipboardList,
  faCubesStacked,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Feature {
  heading: string;
  subheading: string;
  body: string;
  image: string;
}

const WorkOverview = () => {
  const data: Feature[] = [
    {
      heading: "Views",
      subheading: "See Work your Way",
      body: "Choose how you visualize tasks and projects based on your workflows with 10+ views such as Gantt and Kanban",
      image: "/feature5.png",
    },
    {
      heading: "Dashboards",
      subheading: "Make better decision",
      body: "Make more informed decisions with real-time Dashboards. Choose from 30+ widgets to display specific info.",
      image: "/feature6.png",
    },
    {
      heading: "Custom Workflows",
      subheading: "Adapts to you",
      body: "With no-code building blocks, create a workflow for any part of your work and business needs.",
      image: "/feature1.png",
    },
    {
      heading: "Automations",
      subheading: "Get more done",
      body: "Choose from over 200+ pre-built automation recipes to improve efficiency across your work",
      image: "/feature2.png",
    },
    {
      heading: "Integration & Add-ons",
      subheading: "Centralize your work",
      body: "Connect tools you rely on for work into one place, and extend the platform capabilities with add-ons",
      image: "/feature3.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
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

  return (
    <div className="container">
      <div className="row headerContainer mb-2">
        <p className="text-wrap">
          All aspects of work in one complete solution
        </p>
      </div>
      <div className="row textContainer mt-5 mb-3">
        <p className="h4">
          monday work management allows teams to focus on executing tasks,
          projects, and processes efficiently and achieve shared goals at scale.
        </p>
      </div>
      <div className="row optionContainer d-flex">
        <div className="mb-2">
          <h5 className="fw-bolder">What would you like to work on?</h5>
        </div>
        {[
          { icon: faClipboardList, text: "Project management" },
          { icon: faListCheck, text: "Task management" },
          { icon: faUser, text: "Client projects" },
          { icon: faSquareCaretUp, text: "Business Operation" },
          { icon: faBarChart, text: "Resource management" },
          { icon: faChartSimple, text: "Portfolio management" },
          { icon: faBullseye, text: "Goals & Strategy" },
          { icon: faClipboard, text: "Request & Approvals" },
          { icon: faCubesStacked, text: "Create your Own" },
          { icon: faAdd, text: "More Customizable" },
        ].map((item, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 cardHolder mb-1 "
          >
            <div className="card">
              <p className="icon">
                <FontAwesomeIcon icon={item.icon} />
              </p>
              <p className="text w-100">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback mt-3 mb-5">
        <img src={feedback} alt="feedback" className="feedbackImage"></img>
      </div>
      <div className="PerformanceHolder mb-5">
        <img
          src={performance1}
          alt="performance1"
          className="feedbackImage"
        ></img>
        <img
          src={Performance2}
          alt="performance2"
          className="feedbackImage"
        ></img>
      </div>
      <div className="featureHolder">
        <div className="featureHeader mb-2">
          Everything you need to power the core of your work
        </div>
        <div className="featureBody mb-3">
          <p className="mb-3">
            Get started with features designed to build powerful workflows to
            support your unique needs.
          </p>
          <div className="mt-4">
            <Slider {...settings}>
              {data.map((feature, index) => (
                <div key={index} className="sliderContainer">
                  <p className="sliderHeading mb-3 mt-2 text-start">
                    {feature.heading}
                  </p>
                  <h3 className="sliderSub mb-3 text-start">
                    {feature.subheading}
                  </h3>
                  <p className="sliderBody fs-5 fw-lighter mb-5 text-start">
                    {feature.body}
                  </p>
                  <img
                    src={require(`../../assets/images${feature.image}`)}
                    alt={feature.heading}
                    className="sliderImage mt-4"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="workDemo mb-5">
        <div className="mt-5 mb-2">
          {" "}
          <p className="fw-bolder fs-1">Proven impact across the board</p>
        </div>
        <div className="mb-2 fs-4">
          <p>
            See how the teams at monday.com fuel work efficiency and drive
            results across the company.
          </p>
        </div>
        <div className="d-flex justify-content-between mt-3">
          {[
            {
              overHead: "2 min watch",
              head: "Optimize recruitment processes",
              subHead: "29% more candidates processed",
              link: "Learn more ",
              img: "workdemo1.png",
            },
            {
              overHead: "2 min watch",
              head: "Simplify the  OKR tracking",
              subHead: "95% OKR adoptation rate",
              link: "Learn more",
              img: "workdemo2.png",
            },
            {
              overHead: "2 min watch",
              head: "Effectively allocate resources",
              subHead: "Over 3500 hours saved early ",
              link: "learn more ",
              img: "workdemo3.png",
            },
          ].map((demo, index) => {
            return (
              <div className="demoHolder ms-2 p-3" key={index}>
                <div className="demoOverHead text-start mb-4 mt-2">
                  {demo.overHead}
                </div>
                <div className="demoHead text-start mb-4 fw-bolder fs-2">
                  {demo.head}
                </div>

                <div className="demoSubHead text-start mb-5 fs-5 fst-normal">
                  {demo.subHead}
                </div>
                <div className="demoLink text-start mb-5">
                  {demo.link}
                  <FontAwesomeIcon icon={faArrowRight} className="" />
                </div>
                <div className="demoImg text-start">
                  <img
                    src={require(`../../assets/images/${demo.img}`)}
                    alt="/"
                    className="demoImg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="finalize mt-5">
        <div className="row">
          <div className="mb-5"></div>
          <div className=" col-6 col-sm-4 col-md-3 col-lg-2 w-50 p-4 mt-5 ">
            <div className=" finallyText row mt-5">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 w-100 fw-bolder fs-2 mb-2">
                <p>Promote a culture of ownership and confidence at work</p>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 w-100 fst-normal fs-5 mt-2">
                <p>
                  Work ownership and accountability are built into monday work
                  management so leaders, managers, and teams are more
                  accountable, responsible, and connected to their work.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5 col-sm-4 col-md-3 col-lg-2 w-50">
            <img
              src={finally1}
              alt="Responsive"
              className="img-fluid d-block full-width-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverview;
