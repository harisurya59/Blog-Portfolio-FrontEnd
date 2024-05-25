import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase'
import { signOut } from 'firebase/auth'

function Navbar() {
    const navigate = useNavigate()
  const [log,setlog] = useState(false)
      useEffect(()=>{
        //used to check where the user already login or not by check the firebase using onauth
        auth.onAuthStateChanged(function(user){
          if(user){
            setlog(true);
            console.log("user loged in")
          } else {
            setlog(false);
            console.log("user loged out")
          }
        })
      },[])

      function logout(){
        signOut(auth)
      }
    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>
    {
      log?  <button className='button-style hidden md:block' onClick={logout}>Logout</button> :  <button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>
    }

           
          
        </div>
    </div>
  )
}

export default Navbar