import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-scroll'

export const TimeLine = () => {
    const mode = useSelector((state) => state.mode) // redux state
    return (
            <section className={mode === 'day' ? "bg-gray-100 text-gray-800" : "bg-gray-800 text-white"}>
                <Link className='WorkExperience'/>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-700">
                                <h3 className="text-3xl font-semibold">Work Experience</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-700">
                                    <h3 className="text-xl font-semibold tracking-wide">Test Automation Developer</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">TutorOcean</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>Sept 2021 - Dec 2021</time>
                                    <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-700">
                                    <h3 className="text-xl font-semibold tracking-wide">Full Stack Developer</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">TutorOcean</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>Apr 2022 - Sept 2022</time>
                                    <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-700">
                                    <h3 className="text-xl font-semibold tracking-wide">CTO and Co-Founder</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">Serv2U</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2023 - Current</time>
                                    <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-700">
                                    <h3 className="text-xl font-semibold tracking-wide">Software Engineer</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">TradeRev</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>Jan 2023 - Apr 2023</time>
                                    <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default TimeLine