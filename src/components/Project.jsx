import React from "react";
import blogBee from "../assets/portfolio/blogBee.png";
import expense_tracker from "../assets/portfolio/expense_tracker.png";
import promptopia from "../assets/portfolio/promptopia.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: blogBee,
      linkDemo:'https://blog-bee.vercel.app/',
      linkCode:'https://github.com/aman9738/blogBee',
    },
    {
      id: 2,
      src: expense_tracker,
      linkDemo:'https://budget-tracker-speechly654.netlify.app/',
      linkCode:'https://github.com/aman9738/Expense_Tracker',
    },
    {
      id: 3,
      src: promptopia,
      linkDemo:'https://promptopia-dj3qgt3fm-aman9738.vercel.app/',
      linkCode:'https://github.com/aman9738/Promptopia',
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className=" text-2xl py-6">Here is a showcase of some of my best projects that I made. They can be found on my Github!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src,linkDemo,linkCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={linkDemo} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={linkCode} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project ;