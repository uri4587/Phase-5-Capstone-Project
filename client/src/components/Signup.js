import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({first_name: "", last_name: "", username: "", password: "", email: ""})
    const [errors, setErrors] = useState([])
    const [userType, setUserType] = useState("")

    const fetchUrl = () => {
        if(userType === "trainer"){
            return "/trainers"
        }
        else if(userType === "trainee"){
            return "/trainees"
        }
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        
        fetch(fetchUrl(), {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(newUser => {
            if(newUser.errors){
                setErrors(newUser.errors)
            }
            else {
                navigate("/")
            }
        })
    }


    const handleBackToSignin = (e) => {
        e.preventDefault();

        navigate("/")
    }

    const handleFirstNameSignUp = (e) => {
        setNewUser({...newUser, first_name: e.target.value})
    }

    const handleLastNameSignUp = (e) => {
        setNewUser({...newUser, last_name: e.target.value})
    }

    const handleEmailSignup = (e) => {
        setNewUser({...newUser, email: e.target.value})
    }

    const handleUserNameSignUp = (e) => {
        setNewUser({...newUser, username: e.target.value})
    }

    const handlePasswordSignUp = (e) => {
        setNewUser({...newUser, password: e.target.value})
    }

    // const handleBirthdateSignUp = (e) => {
    //     setNewUser({...newUser, date_of_birth: e.target.value})
    // }

    const handleUserTypeChange = (e) => {
        // console.log(e.target.value)
        setUserType(e.target.value)

    }
   console.log("userType is:", userType)
    return (
    <>
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Create Account</h3>
                <p className="mt-1 text-sm text-gray-500">Fill in all personal information to create a new account.</p>
                <button
                className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleBackToSignin}
                type="button"
                >
                    Back to signin
                </button>
            </div>
            
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSignUpSubmit} action="#" method="POST">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                onChange={handleFirstNameSignUp}
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                onChange={handleLastNameSignUp}
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                onChange={handleEmailSignup}
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                onChange={handleUserNameSignUp}
                                type="text"
                                name="username"
                                id="username"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        {/* <div class="flex items-center justify-center">
                            <div class="datepicker relative form-floating mb-3 xl:w-96">
                                <input 
                                onChange={handleBirthdateSignUp}
                                type="date"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Select a date" 
                                />
                                <label for="floatingInput" class="text-gray-700">Enter Date of Birth</label>
                            </div>
                        </div> */}

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                onChange={handlePasswordSignUp}
                                type="password"
                                autoComplete="off"
                                name="password"
                                id="password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                    Choose account type:
                            </label>
                            <br></br>
                            <div className="flex items-center">
                                <input
                                    onChange={handleUserTypeChange}
                                    value="trainer"
                                    name="user-type"
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                Trainer
                                </label>
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <div className="flex items-center">
                                <input
                                    onChange={handleUserTypeChange}
                                    value="trainee"
                                    name="user-type"
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Client
                                </label>
                            </div>
                        </div>
                        {errors? errors.map((e,index) => <div key={index} className='error-message'>{e}</div>):null}
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
    )
}

export default Signup