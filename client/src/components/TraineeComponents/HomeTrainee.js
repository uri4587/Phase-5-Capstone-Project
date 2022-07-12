import {useNavigate} from 'react-router-dom'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  MenuIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'



function HomeTrainee({currentUserTrainee}) {
    const navigate = useNavigate()

    const actions = [
        {
            icon: ClockIcon,
            name: 'Meal Tracker',
            id: 'mealTracker',
            href: 'meal-tracker',
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
            description: "Coming Soon",
            url: '/meals-trainee'
        },
        {
            icon: BadgeCheckIcon,
            name: 'Workouts',
            href: 'workouts',
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
            description: "View current workouts set by your trainer.",
            url: '/workouts-trainee'
        },
        {
            icon: UsersIcon,
            name: 'Message Trainer',
            href: '#',
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
            description: "Coming Soon"
        },
        {
            icon: UsersIcon,
            name: 'View Daily Averages',
            href: '#',
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
            description: "Coming Soon"
        }
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
  return (
    <>
    
          
        <main className="mt-0 pb-8" >
        <div className="min-h-full" >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Main 3 column grid */}
            
              {/* Left column */}
              
                {/* Welcome panel */}
                <section aria-labelledby="profile-overview-title">
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="bg-white p-6">
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                          <div className="flex-shrink-0">
                            <img className="mx-auto h-20 w-20 rounded-full" src={'data:image/png;base64,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'} alt="" />
                          </div>
                          <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{currentUserTrainee.first_name + ' ' + currentUserTrainee.last_name}</p>
                            <p className="text-sm font-medium text-gray-600">{currentUserTrainee.date_of_birth}</p>
                          </div>
                        </div>
                        <div className="mt-5 flex justify-center sm:mt-0">
                          <a
                            href="#"
                            className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <br></br>

                {/* Actions panel */}
                <section aria-labelledby="quick-links-title">
                  <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                    <h2 className="sr-only" id="quick-links-title">
                      Quick links
                    </h2>
                    {actions.map((action, actionIdx) => (
                      <div
                        key={action.name}
                        className={classNames(
                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                        )}
                      >
                        <div>
                            <span
                                className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'rounded-lg inline-flex p-3 ring-4 ring-white'
                            )}
                          >
                            <action.icon className="h-6 w-6" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-lg font-medium">
                              
                            <button onClick={(e) =>{navigate(action.url)}} className="focus:outline-none">
                              {/* Extend touch target to entire panel */}
                              <span className="absolute inset-0" aria-hidden="true" />
                              {action.name}
                            </button>
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            {action.description}
                          </p>
                        </div>
                        <span
                          className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                          aria-hidden="true"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                          </svg>
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
        </main>
    
    </>
  )
}

export default HomeTrainee