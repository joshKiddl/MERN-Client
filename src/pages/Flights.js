import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import AddFlightForm from "../components/AddFlightForm";

const Flights = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await fetch("/api/workouts");
      setPosts(data.data.posts);
    }
    fetchData();
  }, []);

  const searchPost = async (e) => {
    const searchValue = e.target.value;
    const { data } = await fetch(`/api/workouts?search=${searchValue}`);
    // The subset of posts is added to the state that will trigger a re-render of the UI
    setPosts(data.data.posts);
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <h2>Add and remove flights from the database</h2>
      <div className="homeBlock">
        <AddFlightForm />
        <div className="workouts">
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
              onChange={searchPost} // onChange will trigger "search post"
            />
          </Form>
          <Container style={{ maxWidth: "800px" }}>
            <ListGroup variant="flush" as="ol">
              {posts.map((post) => {
                return (
                  <ListGroup.Item key={post._id}>
                    <div className="fw-bold h3">
                      <Link
                        to={`/posts/${post._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Container>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;
