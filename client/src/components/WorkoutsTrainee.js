import {useState} from 'react'
import TraineeExerciseCards from './TraineeExerciseCards'
import dateFormat from "dateformat";

function Workouts({traineeDays, traineeWorkouts, traineeExercises, setTraineeExercises}) {
  const [dropdownToggle, setDropdownToggle] = useState(false)
  
  console.log(traineeExercises)

  const dateDropdown = () => traineeDays.map((day) => {
    console.log(day.date_of_day)
  })
dateDropdown()
  const daysMapper = () => traineeDays.map((day) => {
    const newDate = day.date_of_day.slice(0, 10).replaceAll('-', '/')
    console.log(newDate)
    return <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{dateFormat(newDate , "dddd, mmmm d, yyyy ")}</a>
  })

  daysMapper()

  const exerciseMapper = () => traineeExercises.map((exercise) =>{
    return <TraineeExerciseCards key={exercise.id} exercise={exercise} handleDropdownToggle={handleDropdownToggle} traineeExercises={traineeExercises} setTraineeExercises={setTraineeExercises}/>
  })

  const handleDropdownToggle = () => {
    setDropdownToggle(!dropdownToggle)
  }

  const handleDropdownFilter = () => {

  }
  // const newDate = dateComplete.replaceAll('-', '/')
  return (
    <>
      <h3 className="text-lg leading-6 mx-64 font-medium text-gray-900" onClick={handleDropdownToggle}>Workouts</h3>
      <div class="relative inline-block text-left">
        <div>
          <button 
            onClick={handleDropdownToggle}
            type="button" 
            class="inline-flex justify-center w-1/3 mx-56 pointer-events-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" 
            id="menu-button" 
            aria-expanded="true" 
            aria-haspopup="true">
              Select Date
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

  {dropdownToggle ?  <div class="origin-top-right absolute right-0 mt-0 mx-32 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      {/* <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a> */}
      {daysMapper()}
    </div>
  </div>

:
null}
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