import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const AddFlightForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [number, setNumber] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [operator, setOperator] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      number,
      origin,
      destination,
      operator,
      price,
    };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setNumber("");
      setOrigin("");
      setDestination("");
      setOperator("");
      setPrice("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new flight to the system</h3>

      <label>Flight Number</label>
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        className={emptyFields.includes("number")}
      />

      <label>Origin</label>
      <input
        type="text"
        onChange={(e) => setOrigin(e.target.value)}
        value={origin}
        className={emptyFields.includes("origin") ? "error" : ""}
      />

      <label>Destination</label>
      <input
        type="text"
        onChange={(e) => setDestination(e.target.value)}
        value={destination}
        className={emptyFields.includes("destination") ? "error" : ""}
      />

      <label>Operator</label>
      <input
        type="text"
        onChange={(e) => setOperator(e.target.value)}
        value={operator}
        className={emptyFields.includes("operator") ? "error" : ""}
      />

      <label>Price (£)</label>
      <input
        type="currency"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes("price") ? "error" : ""}
      />

      <button>Add Flight</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddFlightForm;
