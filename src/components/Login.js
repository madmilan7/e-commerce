import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';

// Function
import { validate } from './validate';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "login"))
    }, [data, touched]);

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("success", "you logged in successfully")
        } else {
            setTouched({
                email: true,
                password: true,
                isAccepted: true
            })
            notify("error", "Invalid data!")
        }
    }

    return (
        <div className='flex justify-center items-center bg-gray-50 h-fit'>
            <form className='w-11/12 md:w-fit h-fit p-12 mx-6 my-12 md:m-12 bg-white shadow-xl'>
                <h2 className='text-left mb-10 font-bold text-3xl text-purple-700'>Login</h2>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-sm md:text-base text-left mb-1 text-gray-400'>E-mail</label>
                    <input
                        type="text"
                        name="email"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-11/12 md:w-80 h-8 px-3 border border-solid
                          focus:outline-none border-slate-300 
                          ${errors.name && touched.name ? 'border-red-500' : ''}`}
                    />
                    {errors.email && touched.email &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                    text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.email}
                        </span>
                    }
                </div>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-sm md:text-base text-left mb-1 text-gray-400'>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-11/12 md:w-80 h-8 px-3 border border-solid
                          focus:outline-none border-slate-300 
                          ${errors.name && touched.name ? 'border-red-500' : ''}`}
                    />
                    {errors.password && touched.password &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.password}
                        </span>
                    }
                </div>
                <div className='flex mb-2 h-20'>
                    <label className='text-sm md:text-base text-left mb-1 text-gray-400'>I accept terms of privacy policy</label>
                    <input
                        type="checkbox"
                        name="isAccepted"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className='ml-4 w-4 h-4 appearance-none border border-solid border-slate-500 checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 cursor-pointer'
                    />
                    {errors.isAccepted && touched.isAccepted &&
                        <span className='h-4 text-left mt-1 ml-1 w-fit text-red-600 
                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.isAccepted}
                        </span>
                    }
                </div>
                <div className='flex justify-between items-center'>
                    <Link to="/signup" className='text-purple-700 text-lg'>Sign Up</Link>
                    <button
                        type="submit"
                        onClick={submitHandler}
                        className='text-white bg-purple-700 text-lg px-4 py-1'>
                        Login
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;