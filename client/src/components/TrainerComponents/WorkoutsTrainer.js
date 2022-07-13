import {useState} from 'react'
import dateFormat from "dateformat";
import TraineeExerciseCards from './TrainerExerciseCards';

function WorkoutsTrainer({trainerDays, trainerExercises, trainersClients, trainerWorkouts, setTrainerExercises}) {
  const [dateSelect, setDateSelect] = useState("")
  const [toggleForm, setToggleForm] = useState(false)
  const [newWorkout, setNewWorkout] = useState({exercise_name: "", instructions: "", youtube_url: "", workout_id: ""})
  const [clientSelect, setClientSelect] = useState("")
console.log(trainerExercises)
  const uniqueDateMapper = trainerDays.map((day) => {
    const newDate = day.date.slice(0, 10).replaceAll('-', '/')
    return newDate
  })

// console.log(uniqueDateMapper)
const newUniqueDateMapper = [...new Set(uniqueDateMapper)]
console.log(newUniqueDateMapper)
  const selectDateMapper = () => newUniqueDateMapper.map((day, index) => {
    // console.log(day)
    // console.log(newDate)
  
    return <option key={index} value={day}>{dateFormat(day , "dddd, mmmm d, yyyy ")}</option>
  })

  const selectClientMapper = () => trainersClients.map((client) => {
    // console.log(client.trainee_last_name)
    return <option key={client.id} value={client}>{client.trainee_first_name + " " + client.trainee_last_name}</option>
  })

  let filteredDateResults = trainerExercises.filter((eachExercise) => {
    
    const reformattedDate = eachExercise.exercises_date_of_day.slice(0, 10).replaceAll('-', '/')
    const eachClient = eachExercise.clients.map((client) => {
      return client
    })
    if(eachClient.includes(clientSelect))
      return trainerExercises
    if(reformattedDate.includes(dateSelect))
        return trainerExercises
  })

  const handleDateSelect = (e) => {
    console.log(e.target.value)
    setDateSelect(e.target.value)
  }
  const handleClientSelect = (e) => {
    console.log(e.target.value)
    setClientSelect(e.target.value)
  }
  const handleOnClick = (e) => {
    setToggleForm(!toggleForm)
  }
  const exerciseMapper = () => filteredDateResults.map((exercise) =>{
    return <TraineeExerciseCards key={exercise.id} exercise={exercise} traineeExercises={trainerExercises} setTrainerExercises={setTrainerExercises}/>
  })
  return (
    <>
      <h3 className="text-lg leading-6 mx-64 font-medium text-gray-900">Workouts</h3>
      <div className="relative mx-4 inline-block text-left">
        <button
          onClick={handleOnClick}
          type="button"
          className="inline-flex items-center px-4 py-2 mx-60 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 my-5 mx-36 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Workout
        </button>
        {toggleForm ? 
        <form className="mx-60">
          <div class="mb-6">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date of Workout</label>
            <input type="date" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          </div>
          <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Exercise Name</label>
            <input type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          </div>
          <div class="mb-6">
            <label for="instructions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Instructions</label>
            <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          </div>
          <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Youtube Demonstration Link</label>
            <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit New Workout</button>
        </form>
        :
        null
        }
        <br></br>
        <label htmlFor="countries" className="block mb-2 mx-64 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
        <select onChange={handleClientSelect}id="countries" className="bg-gray-50 mx-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={""} defaultValue>Choose Client</option>
          {selectClientMapper()}
        </select>
        <label htmlFor="countries" className="block mb-2 mx-64 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
        <select onChange={handleDateSelect}id="countries" className="bg-gray-50 mx-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={""} defaultValue>Choose Date</option>
          {selectDateMapper()}
        </select>
      </div>
      
  
      <div className="w-10/12 ml-56 mr-px">
    <ul className="grid grid-rows-0 grid-flow-row gap-4 space-x-0 space-y-2">
    {exerciseMapper()}
    </ul>
    </div>
    </>
  )
}

export default WorkoutsTrainer