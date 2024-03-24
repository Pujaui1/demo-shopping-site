import React, { useState } from 'react';
import './Loginform.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

const Loginform = () => {
    const [formData ,setFormData] = useState({ 
        UserName: '',
        Password: '',
    });
    const [showPassword,setShowPassword]= useState(false)
    const [errors , setErrors]= useState({})
    const navigate = useNavigate();

    const handelShowPassword = () =>{
        setShowPassword(prevState => !prevState);
    }

    const handelChange = (e) => {
        const {name , value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if(!formData.UserName.trim()){
            validationErrors.UserName = "UserName is required";
        }
        if(!formData.Password.trim()){
            validationErrors.Password = "Password is required";
        } else if(formData.Password.length < 6){
            validationErrors.Password = "Password should be at least 6 characters";
        }
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            alert("FORM Submitted Successfully");
            navigate("/dashboard");
        } 
    };

    return (
        <div className='wrapper'>
            <form className='my_Form' onSubmit={handelSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' name='UserName' placeholder='UserName' onChange={handelChange} value={formData.UserName} />
                    <FaUser className='icon' />
                    {errors.UserName && <span>{errors.UserName}</span>}
                </div>
                <div className='input-box'>
                    <input name='Password' autoComplete='on' type={showPassword ? "text" : "password"} placeholder='Password' onChange={handelChange} value={formData.Password}/>
                    {!showPassword ? <FaLock className='icon' onClick={handelShowPassword} /> :
                    <FaLockOpen className='icon' onClick={handelShowPassword} /> }
                    {errors.Password && <span>{errors.Password}</span>}
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remember Me</label>
                    <a href='#'>Forgot Password</a>
                </div>
                <button type='submit' >Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default Loginform;
