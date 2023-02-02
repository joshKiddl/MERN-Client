import { Link } from "react-router-dom";
// import favicon from "./favicon.ico";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <header>
      <div id="navbar" className="container">
        {/* <img src={favicon} alt="icon" height={40} width={40} /> */}
        <Link to={Home}>
          <h5>Add Flights</h5>
        </Link>

      </div>
    </header>
  );
};

export default Navbar;
