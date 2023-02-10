import Button from "@mui/material/Button";
import { FaSistrix, FaGlobe } from "react-icons/fa";


const Home = () => {
  return (
    <div className="home1">
      <h1>Add Travel Content as a Provider</h1>
      <div className="homeButtons">
        <Button size="large" href="/flights" variant="contained">
          Add Flights
          <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
        <Button size="large" href="/accommodation" variant="contained">
          Add Accommodation <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
        <Button size="large" href="/rail" variant="contained">
          Add Rail <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
        <Button size="large" href="/car" variant="contained">
          Add Car Rental <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
        <Button size="large" href="/ferry" variant="contained">
          Add Ferries <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
      </div>
    </div>
  );
};

export default Home;
