import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({setIsLogin, setCurrentUserTrainee, setCurrentUserTrainer}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const [clientLogin, setClientLogin] = useState(true)
    const navigate = useNavigate()
    
const handleTraineeUserSubmit = (e) => {
    e.preventDefault()

    const user = {
        username: username.toLowerCase(), 
        password: password
    }
    console.log(user)
    fetch(`/login_trainee`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json()
            .then(userTrainee=>{
            console.log(userTrainee)

            setCurrentUserTrainee(userTrainee)
            setIsLogin(true)
            navigate("/trainee-home")
        //     const userTraineeId = userTrainee.id
        // fetch(`/trainees/${userTraineeId}`)
        // .then(resp => resp.json())
        // .then(data => {console.log(data)})
        })
        } else {

            res.json()
            .then(json => setError(json.error))
        }
        })
    
    }
    
    const handleTrainerUserSubmit = (e) => {
        e.preventDefault()
    
        const user = {
            username: username.toLowerCase(), 
            password: password
        }
        console.log(user)
        fetch(`/login_trainer`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(userTrainer=>{
                console.log(userTrainer)
    
                setCurrentUserTrainer(userTrainer)
                setIsLogin(true)
                navigate("/trainer-home")
            })
            } else {
    
                res.json()
                .then(json => setError(json.error))
            }
            })
        
        }
const handleUserNameChange = (e) => {
    setUsername(e.target.value)
    }

const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    }

const handleSignupClick = (e) => {
    e.preventDefault()
    
    navigate("/signup")
}



  return (
    <>
        <div className="min-h-full flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                <img
                    className="h-12 w-auto"
                    src="https://trophyfitness.com/fitness/revslider/fashion-1-1-13/circle_banner_image.png"
                    alt="fitness-logo"
                />
                    <p className="font-sans" style={{fontSize: "40px", color:'black', marginLeft: '100px', marginTop: '-55px'}}>FeelFit</p>
                <br></br>
                {clientLogin? 
                <button onClick={(e)=> {setClientLogin(!clientLogin)}} type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Go To Trainer Login</button>
                :
                <button onClick={(e)=> {setClientLogin(!clientLogin)}} type="button" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Go To Client Login</button>
                }
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                
                </div>
                <div className="mt-8">
                <div className="mt-6">
                    {clientLogin 
                    ? 
                    <form onSubmit={handleTraineeUserSubmit} action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Client Username
                        </label>
                        <div className="mt-1">
                        <input
                            onChange={handleUserNameChange}
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Client Password
                        </label>
                        <div className="mt-1">
                        <input
                            onChange={handlePasswordChange}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                                
                                    <label htmlFor="sign-up" className="ml-2 block text-sm text-gray-900">
                                        Don't have an account? 
                                    </label>
                            </div>
                            <a 
                                style={{marginLeft: '10px'}}
                                href="sign-up" 
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={handleSignupClick}
                                >
                                Click Here to Sign Up
                            </a>
                        </div>
                    </div>
                    {error?<div style={{color: 'red', fontWeight: 'bold'}} className='error-message'>{error}</div>:null}
                    <div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Sign in
                        </button>
                    </div>
                    </form>
                    :
                    <form onSubmit={handleTrainerUserSubmit} action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Trainer Username
                        </label>
                        <div className="mt-1">
                        <input
                            onChange={handleUserNameChange}
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Trainer Password
                        </label>
                        <div className="mt-1">
                        <input
                            onChange={handlePasswordChange}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                                
                                    <label htmlFor="sign-up" className="ml-2 block text-sm text-gray-900">
                                        Don't have an account? 
                                    </label>
                            </div>
                            <a 
                                style={{marginLeft: '10px'}}
                                href="sign-up" 
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={handleSignupClick}
                                >
                                Click Here to Sign Up
                            </a>
                        </div>
                    </div>
                    {error?<div style={{color: 'red', fontWeight: 'bold'}} className='error-message'>{error}</div>:null}
                    <div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Sign in
                        </button>
                    </div>
                    </form>}
                    
                </div>
                </div>
            </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
            <img
                style={{ 
                    objectFit: 'cover',
                    opacity: 0.5,
                    height: '800px'}}
                className="absolute inset-0 h-full w-full object-cover"
                src="https://i.etsystatic.com/9084215/r/il/eb93a9/3371601875/il_1588xN.3371601875_1fbv.jpg"
                alt="dumbbell"
            />
            </div>
        </div>
    </>
  )
}

export default Login