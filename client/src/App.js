import React ,{useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import HomeTrainee from './components/HomeTrainee'
import HomeTrainer from './components/HomeTrainer'
import Nav from './components/Nav'
import Signup from './components/Signup'
import WorkoutsTrainee from './components/WorkoutsTrainee'
import MealsTrainee from './components/MealsTrainee'
import NewHomeTrainee from "./components/NewHomeTrainee";

function App() {
const [isLogin, setIsLogin] = useState(false)
const [currentUserTrainee, setCurrentUserTrainee] = useState({})
const [currentUserTrainer, setCurrentUserTrainer] = useState({})
// const [serializerUserTraineeData, setSerializerUserTraineeData] = useState({})
const [traineeDays, setTraineeDays] = useState([])
const [traineeWorkouts, setTraineeWorkouts] = useState([])
const [traineeExercises, setTraineeExercises] = useState([])
const [traineeMeals, setTraineeMeals] = useState([])



const fetchCurrentUser = () => {
  fetch('/authorized_user')
  .then(res => {
    if(res.ok){
      res.json()
      .then(user => {
        user.is_trainee ? (setCurrentUserTrainee(user)) : (setCurrentUserTrainee(null))
        user.is_trainer ? (setCurrentUserTrainer(user)) : (setCurrentUserTrainer(null))

        user.is_trainee || user.is_trainer ? (setIsLogin(true)) : (setIsLogin(false))
        if(user.is_trainee){
          const currentUserTraineeId = user.id
          fetch(`/trainees/${currentUserTraineeId}`)
          .then(resp => resp.json())
          .then(data => {
            // setSerializerUserTraineeData(data); 
            setTraineeDays(data.trainee_serialized_info.trainee_days)
            setTraineeWorkouts(data.trainee_serialized_info.trainee_days_workouts)
            setTraineeExercises(data.trainee_serialized_info.trainee_days_exercises)
            setTraineeMeals(data.trainee_serialized_info.trainee_days_meals)
          })
        }
      })
    }
  })
}

useEffect(fetchCurrentUser, [])
// console.log(currentUserTrainee)
// const currentUserTraineeId = currentUserTrainee.id
// console.log(serializerUserTraineeData)
// const fetchCustomTraineeSerializer = () => {
//   fetch(`/trainees/${currentUserTraineeId}`)
//   .then(resp => resp.json())
//   .then(console.log)
// }


// console.log(currentTraineeData)


// const traineeDays = currentTraineeData.trainee_days


  return (
    <>
    {isLogin ? <Nav currentUserTrainee={currentUserTrainee} setCurrentUserTrainee={setCurrentUserTrainee} setIsLogin={setIsLogin}/> : null}
    {/* <Workouts/> */}
    <Routes>
      <Route path="/" element={<Login setIsLogin={setIsLogin} setCurrentUserTrainee={setCurrentUserTrainee} setCurrentUserTrainer={setCurrentUserTrainer} />} />
      <Route path="/trainee-home" element={<NewHomeTrainee currentUserTrainee={currentUserTrainee} />} />
      <Route path="/trainer-home" element={<HomeTrainer currentUserTrainer={currentUserTrainer} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/workouts-trainee" element={<WorkoutsTrainee currentUserTrainee={currentUserTrainee} traineeDays={traineeDays} traineeWorkouts={traineeWorkouts} traineeExercises={traineeExercises} setTraineeExercises={setTraineeExercises}/>} />
      <Route path="/meals-trainee" element={<MealsTrainee traineeMeals={traineeMeals}/>} />
    </Routes>
    </>
  );
}

export default App;
