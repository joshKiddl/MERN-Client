import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.number}</h4>
      <p><strong>Origins: </strong>{workout.origin}</p>
      <p><strong>Destination: </strong>{workout.destination}</p>
      <p><strong>Operator: </strong>{workout.operator}</p>
      <p><strong>Price in £: </strong>{workout.price}</p>
      <p>Added {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails