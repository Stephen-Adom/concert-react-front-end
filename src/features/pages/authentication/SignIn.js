import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft }  from 'react-icons/fa'
const SignIn = () => {
  return (  
    <div
    className="bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80)` }}
  >
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60"
    >
     <h1 class="text-white text-4xl font-bold mb-8">Sign In</h1>
      <form class="w-full max-w-lg p-12 border border-gray-300 bg-gray-100 rounded-lg bg-opacity-10">
      <div class="mb-4">
          <label for="username" class="block mb-2 text-md font-bold text-white dark:text-white">Your username</label>
          <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5" placeholder="UserName00" required />
      </div>
      <div class="mb-4">
          <label for="password" class="block mb-2 text-md font-bold text-white dark:text-white">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5" placeholder="••••••••" required />
      </div>
      <button type="submit" class="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      <br />
      <Link to="/" class="text-primaryGreen font-medium py-2 flex items-center gap-2"><FaArrowLeft /> Go Back</Link>
      </form> 
    </div>
  </div>
  )
}

export default SignIn