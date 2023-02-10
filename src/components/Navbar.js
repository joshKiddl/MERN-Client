import favicon from "./favicon.ico";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Navbar = () => {
  return (
    <header>
      <div id="navbar" className="container">
        <img src={favicon} alt="icon" height={40} width={40} />
        <ButtonGroup size='small' variant="outlined" className="navs">
        <Button><a href='/'>Home</a></Button>
          <Button><a href='/flights'>Add Flights</a></Button>
          <Button><a href='/accommodation'>Add Accommodation</a></Button>
          <Button><a href='/rail'>Add Rail</a></Button>
          <Button><a href='/car'>Add Car Rental</a></Button>
          <Button><a href='/ferry'>Add Ferries</a></Button>
        </ButtonGroup>
      </div>
    </header>
  );
};

export default Navbar;
