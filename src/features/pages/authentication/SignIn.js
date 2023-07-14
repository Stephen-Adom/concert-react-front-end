import React from 'react'

const SignIn = () => {
  return (  
        <div class="flex flex-col justify-center items-center h-screen">
            <h1 class="">Sign In</h1>
        <form class="w-full max-w-lg p-4 border border-gray-300 bg-gray-100 rounded-lg">
        <div class="mb-4">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
            <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5" placeholder="UserName00" required />
        </div>
        <div class="mb-4">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5" placeholder="••••••••" required />
        </div>
        <button type="submit" class="text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    </div>
  )
}

export default SignIn