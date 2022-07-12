import React from 'react'
import TraineeMealCards from './TraineeMealCards'

function MealsTrainee({traineeMeals}) {
  console.log(traineeMeals)

  const mealMapper = () => traineeMeals.map((meal) => {
    return <TraineeMealCards key={meal.id} meal={meal} />
  })
  return (
    <ul className="grid grid-rows-3 grid-flow-col gap-4 mt-4 px-10">
      {mealMapper()}
    </ul>
  )
}

export default MealsTrainee