import {useState} from 'react'
import dateFormat from "dateformat";
import TraineeExerciseCards from './TrainerExerciseCards';

function WorkoutsTrainer({trainerDays, trainerExercises, trainersClients, trainerWorkouts, setTrainerExercises}) {
  const [dateSelect, setDateSelect] = useState("")
console.log(trainerExercises)
  const selectMapper = () => trainerDays.map((day) => {
    const newDate = day.date.slice(0, 10).replaceAll('-', '/')
    // console.log(newDate)
    return <option key={day.id} value={newDate}>{dateFormat(newDate , "dddd, mmmm d, yyyy ")}</option>
  })
  
  let filteredDateResults = trainerExercises.filter((eachExercise) => {
    const reformattedDate = eachExercise.exercises_date_of_day.slice(0, 10).replaceAll('-', '/')
    if(reformattedDate.includes(dateSelect))
      return trainerExercises
  })
  const handleDateSelect = (e) => {
    console.log(e.target.value)
    setDateSelect(e.target.value)
  }
  
  const exerciseMapper = () => filteredDateResults.map((exercise) =>{
    return <TraineeExerciseCards key={exercise.id} exercise={exercise} traineeExercises={trainerExercises} setTrainerExercises={setTrainerExercises}/>
  })
  return (
    <>
      <h3 className="text-lg leading-6 mx-64 font-medium text-gray-900">Workouts</h3>
      <div className="relative inline-block text-left">
        <label htmlFor="countries" className="block mb-2 mx-64 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
        <select onChange={handleDateSelect}id="countries" className="bg-gray-50 mx-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={""} defaultValue>Choose Date</option>
          {selectMapper()}
        </select>
      </div>
 
  
      <div className="w-10/12 ml-56 mr-px">
    <ul className="grid grid-rows-3 grid-flow-row gap-4 space-x-0 space-y-2">
    {exerciseMapper()}
    </ul>
    </div>
    </>
  )
}

export default WorkoutsTrainer