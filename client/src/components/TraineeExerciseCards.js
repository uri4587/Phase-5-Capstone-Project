import {useState} from 'react';
import dateFormat from "dateformat";
import ReactPlayer from "react-player";

function TraineeExerciseCards({exercise, traineeExercises, setTraineeExercises}) {
    const [completeWorkout, setCompleteWorkout] = useState(false)
    const [updatedExercise, setUpdatedExercise] = useState({results: "", completed: false})
    const [newExercise, setNewExercise] = useState(exercise)
console.log(exercise.exercises_date_of_day)

const formattedDate = dateFormat(exercise.exercises_date_of_day, "dddd, mmmm d, yyyy")
console.log(formattedDate)
    const handleCancelButton = () => {
        setCompleteWorkout(!completeWorkout)
    }
    const handleUpdateButton = () => {
        setCompleteWorkout(!completeWorkout)
    }
    const handleExercisePatch = (e) => {
        e.preventDefault();

            const id = exercise.id
            fetch(`/exercises/${id}`,
            {method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedExercise)})
            .then(resp => resp.json())
            .then(updatedExercise => {console.log(updatedExercise)
            const updateExerciseToMap = traineeExercises.map((eachExercise)=> {
                if(eachExercise.id == updatedExercise.id) {
                        return updatedExercise
                        }
                else {
                  return eachExercise
                }
              })
              setCompleteWorkout(false)
              setTraineeExercises(updateExerciseToMap)
              setNewExercise(updatedExercise)
              console.log("HELLO WORLD")
              
          })}

          const handleResultsCompletedChange = (e) => {
              setUpdatedExercise({...updatedExercise, results: e.target.value, completed: true})
              
          }
          console.log(updatedExercise)
  return (
    
        <>
      {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
      {!completeWorkout ? 
      
      
      <div className="rounded-sm mx-64 bg-gray-200 w-96 "> 
        <div class="font-bold text-xl text-center mb-2">{formattedDate}</div>
        <p class="text-white-700 text-center">
        Exercise Name: {exercise.exercise_name}
        </p>
        <p class="text-white-700 text-center">
        Instruction: {exercise.instructions}
        </p>
        <br></br>
        {/* <iframe style={{marginLeft: '30px'}} width="300" height="300" src={exercise.youtube_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <ReactPlayer
        style={{marginLeft: '45px'}}
        width="300px" 
        height="300px"
        url={exercise.youtube_url}
      />
        <br></br>
        {newExercise.completed ? <p className="text-center"> Results: {newExercise.results}</p> : null}
        <br></br>
        <button
        onClick={handleUpdateButton}
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 my-5 mx-36 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Results
      </button>
      </div>
      
: 
        
    <div className="rounded-sm h-1/2 mx-64 bg-gray-200 w-96 "> 
        <form onSubmit={handleExercisePatch} className="text-center">
        <div class="font-bold text-xl mb-2">{formattedDate}</div>
        <p class="text-white-700 text-base">
        Exercise Name: {exercise.exercise_name}
        <br></br>
        <br></br>
        Instruction: {exercise.instructions}
        {/* <ReactPlayer
        width="300px" 
        height="300px"
        url={exercise.youtube_url}
      /> */}
        <br></br>
        <br></br>
        <div>
      <label htmlFor="results" className="text-md font-medium text-gray-700">
        Input Results
      </label>
      <br></br>
      <br></br>
      <div className="mt-1">
        <input
        onChange={handleResultsCompletedChange}
        value={updatedExercise.results}
          type="text"
          name="results"
          id="results"
          className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-lg w-60 border-gray-900 rounded-lg"
          placeholder="Example (15,14,13 @ 80lb) "
        />
      </div>
      
    </div>
        <br></br>
        <button
        style={{marginLeft: '10px'}}
        onClick={handleCancelButton}
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-small rounded-md shadow-sm text-white bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Cancel
      </button>
        <button
        style={{marginLeft: '5px'}}
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Complete Workout
      </button>
        </p>
        </form>
    </div>
      
      }
   </>


  )
}

export default TraineeExerciseCards