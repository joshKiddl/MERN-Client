import './App.css';
import { useState, useEffect } from 'react';

//function
import { getTest } from './functions/test';

function App() {
  const [data, setData] = useState('Trip Search')
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
    })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await  fetch('http://localhost:8080/api/workouts')
      const json = await response.json()

      if(response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="App">
        <h1>{data}</h1>
    </div>
  );
}

export default App;
