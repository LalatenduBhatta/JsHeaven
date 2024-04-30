import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setAuth }) {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        let value = e.target.value
        let name = e.target.name
        setLoginData({ ...loginData, [name]: value })
        // console.log(loginData);
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let result = await Axios.post("http://127.0.0.7:7777/student/login", loginData)
        // console.log(result.data);
        if (result.data.message) {
            alert(result.data.message)
        } else {
            localStorage.setItem("student", JSON.stringify(result.data))
            setAuth(localStorage.getItem("student"))
            navigate("/")
        }
    }

    return (
        <>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <form className="space-y-6" action="#" onSubmit={onSubmitHandler}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"
                            onChange={onChangeHandler}
                            value={loginData.email}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            onChange={onChangeHandler}
                            value={loginData.password}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to='/signup'><span className="text-blue-700 hover:underline dark:text-blue-500">Create account</span></Link>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login