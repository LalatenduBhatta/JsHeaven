import React from 'react'
import hero from "../../Assets/Images/hero.png"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <header className=' bg-blue-300 flex w-10/12 m-auto mt-4'>
                <div className='h-96 flex flex-col text-2xl w-2/4 justify-center'>
                    <span>🙌 Hello friends</span>
                    <span>I am Sofia and we want to start a web design course together. Do you like it too 😍 ?</span>
                    <Link to="/login"><span className='px-2 py-2 bg-slate-600 text-sm text-yellow-100 w-40 hover:bg-yellow-400 hover:text-slate-600'>START COURESE NOW</span></Link>
                </div>
                <img src={hero} alt="javascript" className=' h-96 w-2/4 '></img>
            </header >
        </>
    )
}

export default Hero