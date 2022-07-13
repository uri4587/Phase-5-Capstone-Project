import {useState} from 'react';
import dateFormat from "dateformat";
import ReactPlayer from "react-player";

function TraineeExerciseCards({exercise, traineeExercises, setTraineeExercises, handleDropdownToggle}) {
    const [completeWorkout, setCompleteWorkout] = useState(false)
    const [updatedExercise, setUpdatedExercise] = useState({results: "", completed: false})
    const [newExercise, setNewExercise] = useState(exercise)
    const [isWorkoutCompleted, setIsWorkoutCompleted] = useState(false)
// console.log(exercise)

const formattedDate = dateFormat(exercise.exercises_date_of_day.slice(0, 10).replaceAll('-', '/'), "dddd mmmm d, yyyy")
// console.log(formattedDate)
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
            .then(updatedExercise => {
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
              // console.log("HELLO WORLD")
              
          })}

          const handleResultsCompletedChange = (e) => {
              setUpdatedExercise({...updatedExercise, results: e.target.value, completed: true})
              
          }
          // console.log(updatedExercise)
  return (
    
        <>
      {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
      {!completeWorkout ? 
      
      <li className="grid grid-cols-4 gap-4" onClick={handleDropdownToggle}>
      <div className="rounded-sm mx-64 bg-gray-200 w-96 "> 
      {exercise.completed
      ? 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" stroke="green" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" stroke="red" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      }
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
      </li>
      
: 
<li className="grid grid-cols-4 gap-4" onClick={handleDropdownToggle}>
    <div className="rounded-sm h-80 mx-64 bg-gray-200 w-96 "> 
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
      </li>
      }
   </>


  )
}

export default TraineeExerciseCards