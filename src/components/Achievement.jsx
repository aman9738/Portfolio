import React from 'react'

const Achievement = () => {
    return (
        <div
            name="achievement"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Achievements
                    </p>
                </div>

                <p className="text-xl mt-10 leading-9 text-bold text-white">
                    "Comming together is a beginning, staying together is a progress and working together is Success. So let's come together to convert achievements to accomplishments."<br/>
                </p>
                <p className="text-2xl mt-10 text-bold text-blue-300">
                    Here are some of my achievements ~
                </p>
                <p className="text-xl mt-10 leading-20">
                    1.  Achieved AIR  7781 GEN  (EWS  1169)  in JEE MAINS 2020 in 1.2 million candidates appearing for the exam.<br/>
                </p>
                <p className="text-xl mt-10 leading-20">
                    2.  Achieved a max Rating of 1654 on <b>LeetCode</b> by participating in 30+ contests.<br/>
                </p>
                <p className="text-xl mt-10 leading-20">
                    3.  Achieved a max Rating of 1617 (3-star) on <b>CodeChef.</b><br/>
                </p>
                <p className="text-xl mt-10 leading-20">
                    4.  Qualified <b>GATE ECE</b> 2023 in my 3rd year.<br/>
                </p>
                <p className="text-xl mt-10 leading-20">
                    5.  Solved 1000+ DSA problems across all platforms.<br/>
                </p>
                <br />
            </div>
        </div>
    )
}

export default Achievement