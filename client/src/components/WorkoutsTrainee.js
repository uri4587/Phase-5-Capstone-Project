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
    <ul className="grid grid-rows-3 grid-flow-col gap-4 px-10">
    {exerciseMapper()}
    </ul>
    </>
  )
}

export default Workouts