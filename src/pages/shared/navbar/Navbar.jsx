import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../../contex/AuthContex/AuthContex'
import navIcon from "../../../assets/job application icon/icons8-job-application-100.png"

const Navbar = () => {
  const {user,signOutUser}=useContext(AuthContext)
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/myApplications">MyApplications</NavLink></li>
    <li><NavLink to="/addJob">Add Job</NavLink></li>
    <li><NavLink to="/myPostedJobs">My Posted Job</NavLink></li>
    
  </>
  const handleLogOut =()=>{
    signOutUser()
    .then(()=>{
      console.log('successfully SignOut')
    })
    .catch(error=>{
      console.log(error.message)
    })
    
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className='h-16' src={navIcon} alt="" />
          </a>
          <h3 className='md:text-3xl font-bold text-primary'>Job Portal</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ? <>
            <button className='btn' onClick={handleLogOut}>LogOut</button>
            </>:<>
             <Link className='text-violet-700 underline' to="/register">Register</Link>
             <Link className="btn"to="/signin">Sign In</Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
