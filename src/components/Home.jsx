import React from 'react'
import HeroImage from '../assets/heroImage4.jpg'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
            style={{paddingTop:"100px"}}
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row" >
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hello, I am <div className='text-[#ADEFD1FF]'>Aman</div>
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md leading-7">
                    I am a final year undergraduate Electronics Engineering student at MNIT, Jaipur (India).
                    I am deeply interested in Web Development and Competitive Programming with strong fundamentals of C++.
                    I'm a technology and software enthusiast
                    always ready to enhance my skills and 
                    work with at most dedication.
                    </p>
                    <div>
                        <Link
                            to="project"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <RiArrowRightSLine size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home