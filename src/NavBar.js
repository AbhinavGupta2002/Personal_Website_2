import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import resume from './Resume/resume.pdf'
import { Link} from 'react-scroll'

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mode = useSelector((state) => state.mode) // redux state

    return (
      <div class={mode === 'night' ? "bg-gray-900" : "bg-white"}>
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="My Name"
              title="My Name"
              class="inline-flex items-center"
            >
                <span class={mode === 'day' ? "ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase" : "ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"}>
                Abhinav Gupta
                </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-gray-500 cursor-pointer" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 cursor-pointer"}>
                <Link className='Header1' to='WorkExperience'>Work Experience</Link>
              </li>
              <li class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-gray-500 cursor-pointer" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 cursor-pointer"}>
                <Link className='Header2' to='FeaturedProjects'>Featured Projects</Link>
              </li>
              <li class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-gray-500 cursor-pointer" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 cursor-pointer"}>
                <Link className='Header3' to='Interests'>Interests</Link>
              </li>
              <li>
                <a
                  href={resume}
                  aria-label="My Resume Document"
                  title="My Resume Document"
                  target="_blank"
                  class={mode === 'day' ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-gray-500" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300"}
                >
                  Resume
                </a>
              </li>
              <li
              class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none cursor-pointer"
              onClick={() => window.location = 'mailto:a363gupt@uwaterloo.ca'}
              >
                Contact Me
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class={mode === 'day' ? "p-5 bg-white border rounded shadow-sm" : "p-5 bg-gray-800 border border-gray-700 rounded shadow-sm"}>
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="My Name"
                          title="My Name"
                          class="inline-flex items-center"
                        >
                          <span class={mode === 'day' ? "ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase" : "ml-2 text-xl font-bold tracking-wide text-white uppercase"}>
                            Abhinav Gupta
                          </span>
                        </a>
                        <br></br><br></br>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li class={mode === 'day' ? "cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-500 w-fit" : "cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 w-fit"}>
                            <Link className='MobileHeader1' to='WorkExperience' onClick={() => setIsMenuOpen(false)}>Work Experience</Link>
                        </li>
                        <li class={mode === 'day' ? "cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-500 w-fit" : "cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 w-fit"}>
                            <Link className='MobileHeader2' to='FeaturedProjects' onClick={() => setIsMenuOpen(false)}>Featured Projects</Link>
                        </li>
                        <li class={mode === 'day' ? "cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-500 w-fit" : "cursor-pointer font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300 w-fit"}>
                            <Link className='MobileHeader3' to='Interests' onClick={() => setIsMenuOpen(false)}>Interests</Link>
                        </li>
                        <li>
                          <a
                            href={resume}
                            aria-label="My Resume Document"
                            title="My Resume Document"
                            target="_blank"
                            onClick={() => setIsMenuOpen(false)}
                            class={mode === 'day' ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-500" : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-gray-300"}
                          >
                            Resume
                          </a>
                        </li>
                        <br></br>
                        <li
                        class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none cursor-pointer"
                        onClick={() => {
                            setIsMenuOpen(false)
                            window.location = 'mailto:a363gupt@uwaterloo.ca'
                        }}
                        >
                            Contact Me
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default NavBar