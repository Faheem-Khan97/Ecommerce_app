import React, {useState} from 'react'
import './css/login.css'
import loginimg from './images/amz.png'
import {auth} from './firebase'
import {Link, useHistory} from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:"",
    })
    const history = useHistory();
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    } 

    const signIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user.email, user.password)
        history.push("/")

    }
    const register = async e => {
        e.preventDefault()
        try {
            const userDetailsResponse = await createUserWithEmailAndPassword(auth,user.email, user.password);
            console.log(userDetailsResponse)
            history.push("/")
            
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }

    }

    return (
        <div className='login' >
            <div className='login__container' >
                <Link to="/" >
                    <div className='login__img-logo' >
                        <img src={loginimg} alt="amazon-logo"/>
                    </div>
                </Link>  
                <div className='login__form_container' >
                    <h2>SIGN-IN</h2>
                    <div class="login__input">
                        <label for="email">Email</label>
                        <input type = "email" name='email' required value = {user.email} onChange={changeHandler} />
                    </div>
                    <div class="login__input">
                        <label for="password">Password</label>
                        <input type = "password" name='password' required value = {user.password} onChange={changeHandler}  />
                    </div>
                    <button className='btn sign' onClick={signIn} >Sign-In</button>
                    <div class="login__input">
                        <p className='login__terms' >
                            By sign-in you agree to the terms and conditions to the fake amazon clone. Agree to privacy policy

                        </p>
                    </div>
                    <button className='btn sign-up' onClick={register} >Create Account</button>

                </div>
               
            </div>
           
            
        </div>
    )
}

