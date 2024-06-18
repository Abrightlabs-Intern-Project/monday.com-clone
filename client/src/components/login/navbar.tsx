import "../../assets/styles/navbar.css";
import logo from "../../assets/images/home-logo.png";
import { Products } from "./products";
import Starter from "./starter";
const Navbar: React.FC = () => {
  return (
    <div className="navigation">
      <div className=" container row navigation">
        <div className="image-container col-2">
          <img src={logo} className="image-logo" alt="logo"></img>
        </div>
        <div className="col-5 me-5">
          <Products />
        </div>
        <div className="col-4  navstarter">
          <Starter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
