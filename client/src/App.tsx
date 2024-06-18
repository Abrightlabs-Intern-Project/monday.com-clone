// // import React from "react";
// // import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import DropMenu from "./components/dev/dropMenu";
// import Header from "./components/dev/header";
// import Home from "./components/home/home";
// // import LandingPage from "./components/dev/landingPage";
// // import DynamicTables from "./components/main/dynamic";
// // import Row from "./components/main/task";
// // import { useDispatch } from "react-redux";
// // import { addTask } from "./features/rowTask/taskSlice";
// // function App() {
// //   const task = {
// //     task: "Sample Task",
// //     owner: "John Doe",
// //     status: "In Progress",
// //     priority: "High",
// //     type: "Feature",
// //     itemId: "123456",
// //   };
// //   const tas;
// //   const dispatch = useDispatch();
// //   const addtask = () => {
// //     dispatch(addTask({}));
// //   };
// //   return (
// //     <div className="App">
// //       {/* <Home />
// //       <LandingPage /> */}
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addTask } from "./features/rowTask/taskSlice";
// import Row from "./components/main/task";
// import { RowTask } from "./interfaces/rowTaskModal";

// function App() {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state: RowTask[]) => state.tasks);

//   const handleAddTask = () => {
//     const newTask = {
//       task: "Sample Task",
//       owner: "John Doe",
//       status: "In Progress",
//       priority: "High",
//       type: "Feature",
//       itemId: "123456",
//     };
//     dispatch(addTask(newTask));
//   };

//   return (
//     <div className="App">
//       <button onClick={handleAddTask} className="btn btn-primary mb-3">
//         Add Task
//       </button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Owner</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Type</th>
//             <th>Item ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task: RowTask) => (
//             <Row
//               key={task.id}
//               id={task.id}
//               task={{
//                 task: task.task || "",
//                 owner: task.owner || "",
//                 status: task.status || "",
//                 priority: task.priority || "",
//                 type: task.type || "",
//                 itemId: task.itemId || "",
//               }}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addTask } from "./features/rowTask/taskSlice";
// import Row from "./components/main/task";
// import { RowTask } from "./interfaces/rowTaskModal";
// import { RootState } from "./app/store";

// function App() {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state: RootState) => state.tasks);

//   const handleAddTask = () => {
//     const newTask = {
//       task: "Sample Task",
//       owner: "John Doe",
//       status: "In Progress",
//       priority: "High",
//       type: "Feature",
//       itemId: "123456",
//     };
//     dispatch(addTask(newTask));
//   };

//   return (
//     <div className="App">
//       <button onClick={handleAddTask} className="btn btn-primary mb-3">
//         Add Task
//       </button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Owner</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Type</th>
//             <th>Item ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task: RowTask) => (
//             <Row
//               key={task.id}
//               id={task.id}
//               task={{
//                 task: task.task || "",
//                 owner: task.owner || "",
//                 status: task.status || "",
//                 priority: task.priority || "",
//                 type: task.type || "",
//                 itemId: task.itemId || "",
//               }}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const App = () => {
//   return <div></div>;
// };
// export default App;

// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Linker from "./pages/linker";
import Home from "./pages/home";
import Mywork from "./pages/mywork";
import Sprint from "./pages/sprint";
import Task from "./pages/task";
import Header from "./components/dev/header";

const App = () => {
  return (
    <Router>
      <div className="container-fluid ">
        <div className="row">
          <Header />
        </div>
        <div className="row bg-white">
          <div className="col-2 p-0">
            <Linker />
          </div>
          <div className="col-10 height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Mywork />} />
              <Route path="/task" element={<Task />} />
              <Route path="/sprint" element={<Sprint />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
