import {useState} from 'react'
import TraineeExerciseCards from './TraineeExerciseCards'
import dateFormat from "dateformat";

function Workouts({traineeDays, traineeWorkouts, traineeExercises, setTraineeExercises}) {
  const [dateSelect, setDateSelect] = useState("")
  // console.log(dateSelect)
  // console.log(traineeExercises)

  console.log(traineeExercises.exercises_date_of_day)
  
  const selectMapper = () => traineeDays.map((day) => {
    const newDate = day.date_of_day.slice(0, 10).replaceAll('-', '/')
    // console.log(newDate)
    return <option value={newDate}>{dateFormat(newDate , "dddd, mmmm d, yyyy ")}</option>
  })
  let filteredDateResults = traineeExercises.filter((eachExercise) => {
    const reformattedDate = eachExercise.exercises_date_of_day.slice(0, 10).replaceAll('-', '/')
    if(reformattedDate.includes(dateSelect))
      return traineeExercises
  })

  const exerciseMapper = () => filteredDateResults.map((exercise) =>{
    return <TraineeExerciseCards key={exercise.id} exercise={exercise} traineeExercises={traineeExercises} setTraineeExercises={setTraineeExercises}/>
  })

  
  
  const handleDateSelect = (e) => {
    console.log(e.target.value)
    setDateSelect(e.target.value)
    
  }
  
console.log(dateSelect)
  // const newDate = dateComplete.replaceAll('-', '/')
  return (
    <>
      <h3 className="text-lg leading-6 mx-64 font-medium text-gray-900">Workouts</h3>
      <div class="relative inline-block text-left">
        <label for="countries" class="block mb-2 mx-64 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
        <select onChange={handleDateSelect}id="countries" class="bg-gray-50 mx-64 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value={""} selected>Choose Date</option>
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

export default Workouts