import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import AuthContext from '../../../contex/AuthContex/AuthContex';
const LoginWithGoogle = () => {
    const{ signWithGoogle}=useContext(AuthContext);
    const handleLoginGoogle=()=>{
        signWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <button onClick={handleLoginGoogle} className="mt-2 w-full btn btn-outline ">Login With Google<FcGoogle className='text-2xl' /></button>
        </div>
    );
};

export default LoginWithGoogle;