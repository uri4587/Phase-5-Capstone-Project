import React ,{useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import HomeTrainee from './components/TraineeComponents/HomeTrainee'
import HomeTrainer from './components/TrainerComponents/HomeTrainer'
import Nav from './components/Nav'
import Signup from './components/Signup'
import WorkoutsTrainee from './components/TraineeComponents/WorkoutsTrainee'
import MealsTrainee from './components/TraineeComponents/MealsTrainee'
import NewHomeTrainee from "./components/TraineeComponents/NewHomeTrainee";
import WorkoutsTrainer from "./components/TrainerComponents/WorkoutsTrainer"

function App() {
const [isLogin, setIsLogin] = useState(false)
const [currentUserTrainee, setCurrentUserTrainee] = useState({})
const [currentUserTrainer, setCurrentUserTrainer] = useState({})
// const [serializerUserTraineeData, setSerializerUserTraineeData] = useState({})
const [traineeDays, setTraineeDays] = useState([])
const [traineeWorkouts, setTraineeWorkouts] = useState([])
const [traineeExercises, setTraineeExercises] = useState([])
const [traineeMeals, setTraineeMeals] = useState([])
const [trainerDays, setTrainerDays] = useState([])
const [trainerExercises, setTrainerExercises] = useState([])
const [trainersClients, setTrainersClients] = useState([])
const [trainerWorkouts, setTrainerWorkouts] = useState([])
const [trainerMeals, setTrainerMeals] = useState([])


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
            setTraineeDays(data.trainee_serialized_info.trainee_days)
            setTraineeWorkouts(data.trainee_serialized_info.trainee_days_workouts)
            setTraineeExercises(data.trainee_serialized_info.trainee_days_exercises)
            setTraineeMeals(data.trainee_serialized_info.trainee_days_meals)
          })
        }
      else {
        const currentUserTrainerId = user.id
          fetch(`/trainers/${currentUserTrainerId}`)
          .then(resp => resp.json())
          .then(data => {
            console.log(data.trainer_serialized_info)
            setTrainerDays(data.trainer_serialized_info.trainer_days)
            setTrainerExercises(data.trainer_serialized_info.trainer_exercises)
            setTrainerMeals(data.trainer_serialized_info.meals)
            setTrainersClients(data.trainer_serialized_info.trainers_clients)
            setTrainerWorkouts(data.trainer_serialized_info.workouts)
          })
      }
      })
    }
  })
}
  
useEffect(fetchCurrentUser, [])

console.log(trainersClients)

  return (
    <>
    {isLogin ? <Nav currentUserTrainer={currentUserTrainer} currentUserTrainee={currentUserTrainee} setCurrentUserTrainee={setCurrentUserTrainee} setIsLogin={setIsLogin}/> : null}
    {/* <Workouts/> */}
    <Routes>
      <Route path="/" element={<Login setIsLogin={setIsLogin} setCurrentUserTrainee={setCurrentUserTrainee} setCurrentUserTrainer={setCurrentUserTrainer} />} />
      <Route path="/trainee-home" element={<HomeTrainee currentUserTrainee={currentUserTrainee} />} />
      <Route path="/trainer-home" element={<HomeTrainer currentUserTrainer={currentUserTrainer} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/workouts-trainee" element={<WorkoutsTrainee currentUserTrainee={currentUserTrainee} traineeDays={traineeDays} traineeWorkouts={traineeWorkouts} traineeExercises={traineeExercises} setTraineeExercises={setTraineeExercises}/>} />
      <Route path="/meals-trainee" element={<MealsTrainee traineeMeals={traineeMeals}/>} />
      <Route path="/workouts-trainer" element={<WorkoutsTrainer trainerDays={trainerDays} trainerExercises={trainerExercises} trainersClients={trainersClients} trainerWorkouts={trainerWorkouts} setTrainerExercises={setTrainerExercises} />} />
    </Routes>
    </>
  );
}

export default App;
