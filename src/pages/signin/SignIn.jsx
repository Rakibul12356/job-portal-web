import React, { useContext } from 'react';
import Lottie from "lottie-react";
import Animation from "../../assets/lotteiFiles/Animation - 1743704621019 (1).json"

import AuthContext from '../../contex/AuthContex/AuthContex';
import LoginWithGoogle from '../shared/socialLogin/LoginWithGoogle';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    //const location = useLocation()
   //const navigate = useNavigate()
    //const from =location.state || '/'

    const handleSignIN = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                //navigate(from)

                console.log(result.user.email);
                const user ={email:email}
                axios.post('http://localhost:5000/jwt',user)
                .then(res=>{
                    console.log(res.data)
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={Animation} loop={true} />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Please LogIn</h1>
                            <LoginWithGoogle></LoginWithGoogle>
                            <div className='divider'>OR</div>
                            <form onSubmit={handleSignIN}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password"
                                        name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn bg-primary mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;