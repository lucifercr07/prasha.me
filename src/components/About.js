import React from "react";

export default function About() {
    return (      
        <div className="h-1/3 pt-10 font-spartan">
          <div className="flex justify-center text-2xl pb-10">
            <div className="hidden md:flex">
                <a href="/" className="pl-2 pr-20 text-green-400 border-b-4 border-green-500">Home</a>
                <a href="/blogs/"
                    className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Blogs</a>
                <a href="/scribs/"
                    className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Random Scribs</a>
                <a href="/papers-shelve/"
                    className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Papers Stack</a>
                <a href="/books-shelve/"
                    className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Books Nook</a>    
                <a href="/cv/"
                    className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Resume</a>
            </div>
          </div>
          <div className="border-8 border-gray-600 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="profile"
                  src="./profile.jpeg"
                />
          </div>
          <h1 className="text-center pt-8 pb-4 font-kaushan text-6xl">
            <span className="font-bold h-15 text-gray-200">Prashant</span>{" "}
            <span className="font-bold h-15 text-red-200">Shubham</span>
          </h1>
          <div className="text-center text-gray-200 text-2xl">
            Computers are all I want to know about!!!
          </div>
          <div className="flex mx-auto justify-center h-20 w-80">
            <ul className="flex flex-1 items-center">
              <li className="px-1">
              <a href="https://www.linkedin.com/in/prashant-shubham07/" target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="LinkedIn"
                  src="./linkedin.svg"
                  height="36"
                  width="36"
                />
              </a>  
              </li>
              <li className="px-1">
              <a href="https://github.com/lucifercr07" target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="Github"
                  src="./github.svg"
                  height="36"
                  width="36"
                />
              </a>  
              </li>
              <li className="px-1">
              <a href="https://medium.com/@prasha7" target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="Medium"
                  src="./medium.svg"
                  height="36"
                  width="36"
                />
              </a>  
              </li>
              <li className="px-1">
              <a href="mailto:prashant1996cr07@gmail.com" target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="Email"
                  src="./email.svg"
                  height="36"
                  width="36"
                />
              </a>  
              </li>
              <li className="px-1">
              <a href="https://stackoverflow.com/users/4134429/prashant-shubham" target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover object-center w-full h-full"
                  alt="Stack overflow"
                  src="./so.svg"
                  height="36"
                  width="36"
                />
              </a>  
              </li>
            </ul>
          </div>
        </div>
      )
}
