import React, { useState } from 'react';
import Axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male', // Default gender
        address: '',
        mobile: '',
        courses: [],
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        address: '',
        mobile: '',
        courses: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            gender,
            address,
            mobile,
            courses,
        } = formData;
        const errors = {};

        // Validation for first name
        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
            valid = false;
        }

        // Validation for last name
        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
            valid = false;
        }

        // Validate email
        if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
            errors.email = 'Please enter a valid email address';
            valid = false;
        }

        // Validate password (for simplicity, just check if it's not empty)
        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        }

        // Confirm password
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        // Validate gender
        if (!gender) {
            errors.gender = 'Please select a gender';
            valid = false;
        }

        // Validation for address
        if (!address.trim()) {
            errors.address = 'Address is required';
            valid = false;
        }

        // Validate mobile number
        if (!mobile || !mobile.match(/^\d{10}$/)) {
            errors.mobile = 'Please enter a valid 10-digit mobile number';
            valid = false;
        }

        // Validate at least one course is selected
        if (courses.length === 0) {
            errors.courses = 'Please select at least one course';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid, you can perform your signup logic here
            // alert('Form is valid. You can submit now.');
            let res = await Axios.post("http://127.0.0.7:7777/student", formData)
            alert(res.data.message)
        }
    };

    const { firstName, lastName, email, password, confirmPassword, gender, address, mobile, courses } = formData;
    const {
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
        gender: genderError,
        address: addressError,
        mobile: mobileError,
        courses: coursesError,
    } = formErrors;

    return (
        <div className="min-h-screen bg-slate-500 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md md:w-2/5 ">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">Student Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-300 font-bold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${firstNameError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            placeholder="John"
                            required
                        />
                        {firstNameError && <p className="text-red-500 text-xs mt-1">{firstNameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-300 font-bold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${lastNameError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            placeholder="Doe"
                            required
                        />
                        {lastNameError && <p className="text-red-500 text-xs mt-1">{lastNameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            placeholder="john.doe@example.com"
                            required
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-300 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            required
                        />
                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-300 font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            required
                        />
                        {confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-300 font-bold mb-2">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${genderError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            required
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {genderError && <p className="text-red-500 text-xs mt-1">{genderError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-300 font-bold mb-2">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={address}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${addressError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            placeholder="123 Main St, City, Country"
                            required
                        ></textarea>
                        {addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-300 font-bold mb-2">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={mobile}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 rounded border ${mobileError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                            placeholder="1234567890"
                            required
                        />
                        {mobileError && <p className="text-red-500 text-xs mt-1">{mobileError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courses" className="block text-gray-300 font-bold mb-2">
                            Courses
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-gray-400">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="math"
                                    checked={courses.includes('math')}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">DEVOPS</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="science"
                                    checked={courses.includes('science')}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">PYTHON</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="history"
                                    checked={courses.includes('history')}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">MERN</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value="english"
                                    checked={courses.includes('english')}
                                    onChange={handleChange}
                                />
                                <span className="ml-2">JAVA</span>
                            </label>
                        </div>
                        {coursesError && <p className="text-red-500 text-xs mt-1">{coursesError}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
