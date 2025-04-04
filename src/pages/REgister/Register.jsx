import React, { useContext } from 'react';
import Lottie from "lottie-react";
import Animation from "../../assets/lotteiFiles/Animation - 1743704621019 (1).json"
import AuthContext from '../../contex/AuthContex/AuthContex';
const Register = () => {

    const{ createUser} =useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
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
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Your Name</label>
                                    <input type="text"
                                        name='name'
                                        className="input" placeholder="your name" />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password"
                                        name='password' />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn bg-primary mt-4">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;