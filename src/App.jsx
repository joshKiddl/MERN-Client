import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Flights from './pages/Flights'
import Accommodation from './pages/Accommodation'
import Rail from './pages/Rail'
import Car from './pages/Car'
import Ferry from './pages/Ferry'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route  path="/" element= {<Home />} />
            <Route  path="/flights" element= {<Flights />} />
            <Route  path="/accommodation" element= {<Accommodation />} />
            <Route  path="/rail" element= {<Rail />} />
            <Route  path="/car" element= {<Car />} />
            <Route  path="/ferry" element= {<Ferry />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
