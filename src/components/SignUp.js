import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';

// Function
import { validate } from './validate';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
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
            notify("success", "You signed up successfully")
        } else {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPass: true,
                isAccepted: true
            })
            notify("error", "Invalid data!")
        }
    }

    return (
        <div className='flex justify-center items-center bg-gray-50 h-screen'>
            <form className='border border-solid border-slate-300 
                            w-fit h-fit p-12 m-12 rounded-lg bg-white'>
                <h2 className='text-left mb-10 font-bold text-3xl text-purple-700'>Sign Up</h2>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-left mb-1 text-gray-400'>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-80 h-8 rounded-md px-3 border border-solid
                          focus:outline-none border-slate-300 
                          ${errors.name && touched.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && touched.name &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.name}
                        </span>
                    }
                </div>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-left mb-1 text-gray-400'>E-mail</label>
                    <input
                        type="text"
                        name="email"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-80 h-8 rounded-md px-3 border border-solid
                        focus:outline-none border-slate-300 
                        ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && touched.email &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.email}
                        </span>
                    }
                </div>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-left mb-1 text-gray-400'>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-80 h-8 rounded-md px-3 border border-solid
                        focus:outline-none border-slate-300 
                        ${errors.password && touched.password ? 'border-red-500' : ''}`}
                    />
                    {errors.password && touched.password &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.password}
                        </span>
                    }
                </div>
                <div className='flex flex-col mb-2 h-20'>
                    <label className='text-left mb-1 text-gray-400'>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPass"
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={`w-80 h-8 rounded-md px-3 border border-solid
                        focus:outline-none border-slate-300 
                        ${errors.confirmPass && touched.confirmPass ? 'border-red-500' : ''}`}
                    />
                    {errors.confirmPass && touched.confirmPass &&
                        <span className='h-4 text-left mt-1 w-fit text-red-600 
                                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.confirmPass}
                        </span>
                    }
                </div>
                <div className='flex mb-2 h-20'>
                    <div className='flex text-sm items-center h-5 text-center'>
                        <label className='text-left mb-1 text-gray-400'>I accept terms of privacy policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            className='ml-4 w-4 h-4 appearance-none border border-solid border-slate-500 rounded checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 cursor-pointer'
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted &&
                        <span className='h-4 text-left mt-1 ml-1 w-fit text-red-600 
                                        text-xs leading-3 p-0.5 bg-red-50'>
                            {errors.isAccepted}
                        </span>
                    }
                </div>
                <div className='flex justify-between items-center'>
                    <Link to="/login" className='text-purple-700 text-lg'>Login</Link>
                    <button
                        type="submit"
                        onClick={submitHandler}
                        className='text-white bg-purple-700 text-lg px-4 py-1 rounded-md'
                    >Sign Up
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;