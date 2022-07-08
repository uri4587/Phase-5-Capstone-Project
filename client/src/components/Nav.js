import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom'


  
  export default function Nav({currentUserTrainee, setCurrentUserTrainee, setIsLogin}) {
      const navigate = useNavigate()

    const navigation = [
        { name: 'Dashboard', icon: HomeIcon, href: '/trainee-home', current: true },
        { name: 'Meal Tracker', icon: UsersIcon, href: '', count: 3, current: false },
        { name: 'Workouts', icon: FolderIcon, href: '/workouts', count: 4, current: false },
        { name: 'Messages', icon: CalendarIcon, href: '#', current: false },
        { name: 'Daily Averages', icon: InboxIcon, href: '#', count: 12, current: false }
        ]
    
        function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
        }
    
        const handleLogOut = () => {

        fetch('/logout', {method:'DELETE'}) 
        .then(()=>{
        setCurrentUserTrainee({})
        setIsLogin(false)
        navigate("/")
    })
    }
      
    return (
    <>
        {/* <aside class="w-64" aria-label="Sidebar"> */}
      <div className="fixed max-w-fit h-screen bg-indigo-700">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://trophyfitness.com/fitness/revslider/fashion-1-1-13/circle_banner_image.png"
              alt="Workflow"
            />
            <p className="font-sans" style={{fontSize: "25px", color:'white'}}>FeelFit</p>
          </div>
          <nav className="my-16 flex-1 px-2 space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
              <a
                key={item.name}
                onClick={(e) =>{navigate(item.href)}}
                className={classNames(
                  item.current ? 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75' : 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
                // 'bg-indigo-800 text-white' to show select item on dashboard
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                <span className="flex-1">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 mt-96 flex border-t border-indigo-800 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{currentUserTrainee.first_name}</p>
                <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
            </div>
            <svg onClick={handleLogOut}xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{marginLeft: '50px'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            </div>
          </a>
        </div>
      </div>
        {/* </aside> */}
    </>
    )
  }
