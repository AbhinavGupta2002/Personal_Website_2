import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import TimeLineList from './TimeLineList'
import TimeLineLogo from './TimeLineLogo'

const TimeLineEntry = ({ brand, companyName, companyUrl, linkable, role, date, children, mode, index }) => (
    <div
        className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ${mode === 'day'
            ? 'sm:before:bg-blue-500 sm:before:ring-4 sm:before:ring-blue-100'
            : 'sm:before:bg-blue-400 sm:before:ring-4 sm:before:ring-blue-900/50'}`}
        data-aos="fade-up"
        data-aos-delay={index * 80}
    >
        <TimeLineLogo brand={brand} companyName={companyName} companyUrl={companyUrl} linkable={linkable} />
        <h3 className={`text-xl font-semibold tracking-wide ${mode === 'day' ? 'text-slate-800' : 'text-white'}`}>{role}</h3>
        <h3 className={`text-lg font-medium tracking-wide ${mode === 'day' ? 'text-blue-700' : 'text-blue-400'}`}>{companyName}</h3>
        <time className={`text-xs font-medium tracking-wider uppercase mt-1 ${mode === 'day' ? 'text-slate-500' : 'text-slate-500'}`}>{date}</time>
        {children}
    </div>
)

export const TimeLine = () => {
    const mode = useSelector((state) => state.mode)
    return (
        <section className={mode === 'day' ? 'bg-white text-slate-800' : 'bg-slate-900 text-white'}>
            <Link smooth={true} className='WorkExperience'/>
            <div className="container max-w-5xl px-4 py-20 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3" data-aos="fade-right">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-1.5 before:mb-5 before:rounded-full before:mx-auto sm:before:mx-0 before:bg-gradient-to-r before:from-blue-600 before:to-purple-600">
                            <h3 className="text-3xl font-bold">Work Experience</h3>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className={`col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-10 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 text-center sm:text-left ${mode === 'day'
                            ? 'before:bg-gradient-to-b before:from-blue-300 before:to-slate-200'
                            : 'before:bg-gradient-to-b before:from-blue-600 before:to-slate-700'}`}>

                            <TimeLineEntry mode={mode} index={0} brand="amazon" companyName="Amazon - Alexa Plus" companyUrl='https://alexa.amazon.com/about' role="Software Development Engineer I" date="June 2025 - Present">
                                <TimeLineList points={[
                                    "Launched GenAI-powered personalization systems for Alexa devices in Java, generating context-aware and timely recommendations from user signals, increasing customer engagement by 20%.",
                                    "Engineered a real-time event-driven pipeline for live sports updates (e.g., NFL halftime events), generating 500K+ notifications using LLMs per day, increasing customer engagement by 40%.",
                                    "Optimized LLM latency, operational costs, and AWS Bedrock inferencing capacity for Anthropic models by up to 70% by optimizing prompts, introducing dynamic prompt generation, and caching input tokens across production pipelines.",
                                    "Engineered an LLM-as-a-Judge layer to evaluate AI-generated personalized podcast topics for Alexa, automatically invalidating 30% of low-quality topics, processing 10,000 beta customers daily.",
                                    "Built and owned a business metrics and observability pipeline (AWS CloudWatch, S3, Lambda, SQS) to track user engagement, system performance, and LLM performance.",
                                    "Drove a 90% reduction in data compliance risks through privacy and security reviews for GenAI services; enforced GDPR and DMA compliance, implemented safeguards against prompt injections, and integrated real-time PII detection with AWS Bedrock Guardrails."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={1} brand="bell" companyName="Bell" companyUrl='https://www.bell.ca' role="Machine Learning Engineer Intern" date="May 2024 - Dec 2024">
                                <TimeLineList points={[
                                    "Built scripts to deploy ML models to production and scaling them accordingly.",
                                    "Built an automated service with Gemini LLM to summarize technician work, cutting tech support response times by 70%.",
                                    "Created a GenAI code template for data scientists to standardize web service development with Gemini, supporting major LLM functionalities like RAG - improving code consistency across teams and reducing development time by 40%.",
                                    "Productionized scalable batch processing pipelines using GCP Dataflow to run Gemini Flash 1.5, such as for enabling the daily analysis of 200,000 customer chats in French, orchestrated through Apache Airflow for seamless automation - reducing operational costs by 25% and enabling faster data processing for business-critical use cases.",
                                    "Developed software to streamline CloudSQL schema changes from DEV to UAT and PROD using AtlasGo, Bash, and YAML being run on GitLab CI/CD - eliminating the chance for DDL mismatches between database environments. These databases store training data for the models.",
                                    "Built a BentoML unit testing framework with Python, Pytest, and Docker to test the model and its API logic, which will run in the CI pipeline with Jenkins, for Bell's data scientists to implement for their respective AI projects - cutting down errors in production by 50%."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={2} brand="tesla" companyName="Tesla" companyUrl='https://www.tesla.com' role="Full Stack Engineer Intern" date="May 2024 - Aug 2024">
                                <p className="mt-3 font-semibold text-red-400">Offer rescinded by company due to the recession.</p>
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={3} brand="deloitte" companyName="Deloitte" companyUrl='https://www2.deloitte.com/us/en/pages/consulting/solutions/cloud-consulting-services.html' role="Cloud Backend Engineer Intern" date="May 2023 - Aug 2023">
                                <TimeLineList points={[
                                    "Built the backend for Deloitte's B2B cloud provisioning service that can create AWS, GCP, and Azure cloud environments, which has strict policies of a client enforced within it - highly customizable based on their requests.",
                                    "Used .NET with C# to engineer a highly decoupled and modularized system to dynamically search for cloud bundles stored in MongoDB.",
                                    "Implemented a service that identifies and schedules the execution of tasks for the provisioning platform."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={4} brand="openlane" companyName="OpenLane" companyUrl='https://openlane.com' role="Backend Engineer Intern" date="Jan 2023 - Apr 2023">
                                <TimeLineList points={[
                                    "Implemented REST APIs in AWS Serverless with PostgreSQL and Elastic Search databases, which involved making lambda functions, handlers, controllers, query builders, post-processors, and adding on to Swagger files in TypeScript.",
                                    "Developed object-oriented backend services that call external APIs from organizations like Okta and Amazon. Developed software for and worked closely with teams from different organizations, such as Adesa, TradeRev, and Okta.",
                                    "Built a NodeJS script to run multiple threads in parallel to query 6 million rows of data from OracleDB to update development databases weekly. Improved performance by 160% when compared to single-threaded querying.",
                                    "Formulated 40+ Cucumber integration, Jest unit, and Mocha unit test cases - ensuring code reliability and robustness."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={5} brand="serv2u" companyName="Serv2U" linkable={false} role="CTO and Co-Founder" date="May 2022 - July 2023">
                                <TimeLineList points={[
                                    "Led and technically mentored the engineering team to develop the company's website using the FReMP stack - followed the agile methodology.",
                                    "Personally developed dozens of reusable and compact react components. Notably, the innovative cart system that is complex and well-engineered.",
                                    "Reviewed all frontend and backend code before being merged for production.",
                                    "Made crucial decisions while spearheading the engineering department as CTO and Co-Founder, such as using PayPal as our clients' secondary payment method as microtransactions are cheaper than its competitors."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={6} brand="tutorocean" companyName="TutorOcean" companyUrl='https://www.tutorocean.com' role="Frontend Developer Intern" date="May 2022 - Aug 2022">
                                <TimeLineList points={[
                                    "Developed efficient react components and API calls for the company's B2B websites using the MERN stack.",
                                    "Fixed over 40% of issues being reported across all B2B software.",
                                    "Diagnosed new issues found upon testing components and data, using Studio 3T, and provided detailed documentation for them."
                                ]} />
                            </TimeLineEntry>

                            <TimeLineEntry mode={mode} index={7} brand="tutorocean" companyName="TutorOcean" companyUrl='https://www.tutorocean.com' role="Test Automation Developer Intern" date="Sep 2021 - Dec 2021">
                                <TimeLineList points={[
                                    "Developed over 50 new regression test cases for B2C and B2B test automation.",
                                    "Analyzed and fixed hundreds of test cases being run everyday.",
                                    "Setup the mobile test automation department for the company, using technologies like Appium and Robot Framework - reported my progress directly to TutorOcean's CTO."
                                ]} />
                            </TimeLineEntry>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLine
