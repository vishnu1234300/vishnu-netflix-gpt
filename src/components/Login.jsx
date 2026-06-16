import React from 'react'
import Header from './Header'
import { useState } from 'react'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const ToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" 
            alt="logo"/>
        </div>
        
        <form className=" absolute bg-black w-3/12 my-36 p-12 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
          <h1 className="font-bold tet-3xl py-4 m-2"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && (
            <input type="text" placeholder="Enter Name" className="p-2 m-2 w-full bg-gray-700"/>
          )}
            <input type="text" placeholder='Enter Email address'
             className='p-2 m-2 w-full bg-gray-700' />
             <input type="password" placeholder='Enter password' className='p-2 m-2 w-full bg-gray-700' />
             <button className="p-3 m-2 w-full bg-red-400  rounded-lg"> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4" onClick={ToggleSignInForm}> {isSignInForm ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In"}</p>
        </form>

    </div>
  )
}

export default Login
/*  rafce = react  arrow function component  export
we  are starting with this component in our project 
from 38:00 t0 46, we created four files like 
-Login
-Browse
-Header
-body
-- IN BODY we used createBrowser router,
 router provider with login and browse with the paths
 createBrowserRouter ([]), why we are using [], what we call these, 
46 to 50, after this we get images from netflix 
-NETFLIX LOGO -- NETWORK , IMG IN HEADER PAGE  COPY LINK ADDRESS = COPY URL
--BACKGROUND IMAGE COPY IMAGE ADDRESS  IN LOGIN PAGE 
-- WE got pronblem here both images are coming one by one but , 
we need netfix logo on top of the background image = overlap, for that  we are using  position: absloute 
from 50 to 55, 
we mainly focused on tcss in header
    <div className="absolute px py bg-gradient-to-b from black">
    <img classname="w-44"

*/

