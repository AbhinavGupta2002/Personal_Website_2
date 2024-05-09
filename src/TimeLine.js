import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-scroll'

export const TimeLine = () => {
    /*<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
        <TimeLineLogo
            imgUrl='https://logo.clearbit.com/www.tesla.com'
            companyUrl='https://www.tesla.com'
        />
        <h3 className="text-xl font-semibold tracking-wide">Full Stack Engineer Intern</h3>
        <h3 className="text-xl font-semibold tracking-wide">Tesla</h3>
        <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2024 - Aug 2024</time>
        <p className="mt-3"></p>
    </div>*/
    const mode = useSelector((state) => state.mode) // redux state
    return (
            <section className={mode === 'day' ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}>
                <Link smooth={true} className='WorkExperience'/>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-700">
                                <h3 className="text-3xl font-semibold">Work Experience</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300 text-center sm:text-left">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://logo.clearbit.com/www.bell.net'
                                        companyUrl='https://www.bell.ca'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Machine Learning Engineering Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">Bell</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2024 - Aug 2024</time>
                                    <p className="mt-3">Currently working on building scripts to deploy ML models to production and scaling them accordingly.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://logo.clearbit.com/www.tesla.com'
                                        companyUrl='https://www.tesla.com'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Full Stack Engineering Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">Tesla</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2024 - Aug 2024</time>
                                    <p className="mt-3 font-semibold text-red-400">Offer rescinded by company due to the recession.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeloitteNewSmall.png/220px-DeloitteNewSmall.png'
                                        companyUrl='https://www2.deloitte.com/us/en/pages/consulting/solutions/cloud-consulting-services.html'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Cloud Backend Engineer Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">Deloitte</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2023 - Aug 2023</time>
                                    <p className="mt-3">Built the backend for Deloitte's B2B cloud provisioning service that can create AWS, GCP, and Azure cloud environments, which has strict policies of a client enforced within it - highly customizable based on their requests. Specifically, used .NET with C# to engineer a highly decoupled and modularized system to dynamically search for cloud bundles stored in MongoDB. Additionally, Implemented a service that identifies and schedules the execution of tasks for the provisioning platform.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://yt3.googleusercontent.com/Bv3yP23hUhC_Ct0Ua4LKSN-8KBW8-suhdA8id7XStnOkxX2H9_e4kds_BBJFzRz6HiOtehs6Ew=s900-c-k-c0x00ffffff-no-rj'
                                        companyUrl='https://openlane.com'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Backend Engineer Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">OpenLane</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>Jan 2023 - Apr 2023</time>
                                    <p className="mt-3">Implemented REST APIs in AWS Serverless with PostgreSQL and Elastic Search databases, which involved making
lambda functions, handlers, controllers, query builders, post-processors, and adding on to Swagger files in TypeScript. Developed object-oriented backend services that call external APIs from
organizations like Okta and Amazon. Developed software for and worked closely with teams from different organizations, such as Adesa, TradeRev, and Okta.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://logo.clearbit.com/www.serv2u.org'
                                        companyUrl='https://www.serv2u.org'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">CTO and Co-Founder</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">Serv2U</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2022 - July 2023</time>
                                    <p className="mt-3">Led and technically mentored the engineering team to develop the company's website using the FReMP stack - followed the agile methodology. Personally developed dozens of reusable and compact react components. Notably, the innovative cart system that is complex and well-engineered. Reviewed all frontend and backend code before being merged for production. Made crucial decisions while spearheading the engineering department as CTO and Co-Founder, such as using PayPal as our clients' secondary payment method.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://logo.clearbit.com/www.tutorocean.com'
                                        companyUrl='https://www.tutorocean.com'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Frontend Developer Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">TutorOcean</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>May 2022 - Aug 2022</time>
                                    <p className="mt-3">Developed efficient react components and API calls for the company's B2B websites using the MERN stack. Fixed over 40% of issues being reported across all B2B software. Diagnosed new issues found upon testing components and data, using Studio 3T, and provided detailed documentation for them.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                                    <TimeLineLogo
                                        imgUrl='https://logo.clearbit.com/www.tutorocean.com'
                                        companyUrl='https://www.tutorocean.com'
                                    />
                                    <h3 className="text-xl font-semibold tracking-wide">Test Automation Developer Intern</h3>
                                    <h3 className="text-xl font-semibold tracking-wide">TutorOcean</h3>
                                    <time className={mode === 'day' ? "text-xs tracking-wide uppercase text-gray-600" : "text-xs tracking-wide uppercase text-gray-500"}>Sep 2021 - Dec 2021</time>
                                    <p className="mt-3">Developed over 50 new regression test cases for B2C and B2B test automation. Analyzed and fixed hundreds of test cases being run everyday. Setup the mobile test automation department for the company, using technologies like Appium and Robot Framework - reported my progress directly to TutorOcean's CTO.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

const TimeLineLogo = (props) => {
    return (
        <a href={props.companyUrl} target='_blank' className='w-fit -ml-12 z-50 hidden sm:block'>
            <img
                src={props.imgUrl}
                className='w-10 h-10 rounded-full object-cover'
                alt='Description of the image'
            />
        </a>
    )
}

export default TimeLine