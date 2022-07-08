import React from 'react'
import TraineeExerciseCards from './TraineeExerciseCards'
// import dateFormat from 'date-format'

function Workouts({traineeDays, traineeWorkouts, traineeExercises, setTraineeExercises}) {
  
  
  console.log(traineeDays.date_of_day)
  
  const daysMapper = () => traineeDays.map((day) => {
    console.log(day.date_of_day)
  })

  daysMapper()

  const exerciseMapper = () => traineeExercises.map((exercise) =>{
    return <TraineeExerciseCards key={exercise.id} exercise={exercise} traineeExercises={traineeExercises} setTraineeExercises={setTraineeExercises}/>
  })

  return (
    <>
      <h3 className="text-lg leading-6 mx-64 font-medium text-gray-900">Workouts</h3>
      <div className="w-10/12 ml-56 mr-px">
    <ul className="grid grid-rows-2 grid-flow-col gap-0 w-40 space-x-0 space-y-2">
    {exerciseMapper()}
    </ul>
    </div>
    </>
  )
}

export default Workouts