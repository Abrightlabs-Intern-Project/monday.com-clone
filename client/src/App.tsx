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
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="">
          <div className="row">
            <Header />
          </div>
          <div className="row bg-white">
            <div className="col-2 p-0 linker-container">
              <Linker />
            </div>
            <div className="col  height">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/work" element={<Mywork />} /> */}
                <Route path="/task" element={<Task />} />
                {/* <Route path="/sprint" element={<Sprint />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
