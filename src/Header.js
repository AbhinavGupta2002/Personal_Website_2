import React from 'react'
import headshot from './img/headshot1.png'
import { useSelector } from 'react-redux'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiDevpost} from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

export const Header = () => {
  const mode = useSelector((state) => state.mode) // redux state

  return (
    <div className={mode === 'night' ? "bg-gray-900" : "bg-gray-100"}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 text-center hdr:text-start">
            <div className="max-w-xl mb-6">
              <h2 className={mode === 'day' ? "mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none" : 
                                              "mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"}>
                  <TypeAnimation
                  sequence={[
                    "Hi, My Name is Abhinav 👨‍💻"
                    ]}
                    speed={35}
                    wrapper="span"
                  />
                  
              </h2>
              <p className={mode === 'day' ? "text-base text-gray-700 md:text-lg" : "text-base text-gray-400 md:text-lg"}>
                  <p>
                      I am a 3rd year student studying Honors Computer Science - Software Engineering Specialization at the University of Waterloo.
                  </p>
                  <br></br>
                  <p>
                      As an intern, I have been developing great software for industry-leading companies. As a CTO, I have been managing teams to build an innovative product from scratch.
                  </p>
                  <br></br>
                  <p>
                      I am currently looking for Software Development internship/co-op opportunities for Spring 2024.
                  </p>
                  <br></br>
                  <br></br>
                  <p className="flex gap-8 hdr:gap-5 justify-center hdr:justify-start">
                    <a
                    href="https://github.com/AbhinavGupta2002"
                    aria-label="My GitHub Profile"
                    title="My GitHub Profile"
                    target="_blank"
                    class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-600" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-600"}
                    >
                      <BsGithub style={{fontSize: '150%'}}/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/abhinavgupta2002"
                    aria-label="My GitHub Profile"
                    title="My GitHub Profile"
                    target="_blank"
                    class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-600" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-600"}
                    >
                      <BsLinkedin style={{fontSize: '150%'}}/>
                    </a>
                    <a
                    href="https://devpost.com/AbhinavGupta2002"
                    aria-label="My GitHub Profile"
                    title="My GitHub Profile"
                    target="_blank"
                    class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-blue-600" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-600"}
                    >
                      <SiDevpost style={{fontSize: '150%'}}/>
                    </a>
                  </p>
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className={`object-cover w-full h-56 rounded shadow-lg sm:h-96 border ${mode === 'day' ? 'border-gray-400' : 'border-gray-700'}`}
              src={headshot}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
