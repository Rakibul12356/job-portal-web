import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);

    }
    const signWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('etr', currentUser)
            if(currentUser?.email){
                const user = {email: createUser.email}
               axios.post('http://localhost:5000/jwt',user) 
               .then(res=>{console.log(res.data)
                setLoading(false)
               })
              
            }
            else{
                axios.post('http://localhost:5000/logout',{},{
                    withCredentials:true
                })
                .then(res=>{console.log('logout',res.data)
                    setLoading(false)
                })
            }
            //put it on the right place
            
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;