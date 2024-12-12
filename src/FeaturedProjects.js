import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-scroll'
import {BsGithub} from 'react-icons/bs'
import {TbApi} from 'react-icons/tb'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {SiDevpost} from 'react-icons/si'

// Local Imports
import personalWebsite from './img/personalWebsite.png'
import speedyMathDemo from './img/speedyMathDemo.gif'
import serv2uWebsite from './img/serv2uWebsite.png'
import aiWebscraper from './img/aiWebscraper.png'
import tinyGen from './img/tinyGen.png'
import connectPlus from './img/connectPlus.jpg'
import tripTailor from './img/triptailor.jpeg'
import keyHaven from './img/keyHavenLogo.png'
import deepNN from './img/deepNN.png'

const TAG = {
    Language: {
        Python: 'Python',
        Jsx: 'JSX/CSS',
        Swift: 'Swift',
        C: 'C'
    },
    Tool: {
        Git: 'Git',
        Redux: 'Redux',
        Tailwind: 'TailwindCSS',
        Numpy: 'NumPy',
        Matplotlib: 'Matplotlib',
        Sklearn: 'SkLearn',
        Mongodb: 'MongoDB',
        Chromadb: 'Chroma VectorDB',
        Supabase: 'Supabase',
        Gcp: 'GCP',
        Aws: 'AWS',
        Cohere: 'Cohere API',
        Heroku: 'Heroku',
        Elephant: 'ElephantSQL',
        Unsplash: 'Unsplash API',
        Render: 'Render',
        RedisCache: 'Redis Cache',
        Docker: 'Docker',
        Xcode: 'XCode',
        Postgres: 'PostgreSQL',
        OpenAi: 'OpenAI'
    },
    Framework: {
        ReactJs: 'React JS',
        ReactTs: 'React TS',
        Flask: 'Flask',
        FastApi: 'FastAPI',
        Express: 'Express',
        Nodets: 'Node TS',
        Langchain: 'Langchain'
    },
    Concept: {
        NN: 'Neural Networks',
        ML: 'Machine Learning',
        Llm: 'LLM',
        Fremp: 'FReMP',
        Rag: 'RAG'
    }
}

export const FeaturedProjects = () => {
    const mode = useSelector((state) => state.mode) // redux state
    const projects = [
        {
            thumbnail: personalWebsite,
            title: 'Personal Website',
            body: 'Responsive two-themed website to display my skills to colleagues, friends, and recruiters.',
            tags: [TAG.Framework.ReactJs, TAG.Tool.Redux, TAG.Tool.Tailwind, TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/Personal_Website_2'
                }
            ]
        },
        {
            thumbnail: tinyGen,
            title: 'TinyGen',
            body: 'AI-powered API service that can fix/modify your code on GitHub in seconds, based on your request.',
            tags: [TAG.Language.Python, TAG.Framework.FastApi, TAG.Concept.Llm, TAG.Tool.OpenAi, TAG.Tool.Supabase, TAG.Framework.Langchain, TAG.Tool.Render,TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/TinyGen'
                },
                {
                    logo: <TbApi className='hover:text-blue-600 cursor-pointer transition-colors duration-200 text-2xl'/>,
                    link: 'https://tinygen-terq.onrender.com/docs'
                }
            ]
        },
        {
            thumbnail: aiWebscraper,
            title: 'AI Company Analysis',
            body: 'AI-powered API service that can get an overview, industries, operations, and services of any company in the world from just their website URL. [Not Open Source]',
            tags: [TAG.Language.Python, TAG.Framework.FastApi, TAG.Concept.Llm, TAG.Tool.OpenAi, TAG.Tool.Docker, TAG.Tool.RedisCache, TAG.Framework.Langchain, TAG.Concept.Rag, TAG.Tool.Chromadb, TAG.Tool.Git],
        },
        {
            thumbnail: deepNN,
            title: 'Red Wine Classifier',
            body: 'Non-linear feedforward deep neural network to predict the quality of red wine, given its physical attributes.',
            tags: [TAG.Language.Python, TAG.Tool.Numpy, TAG.Tool.Matplotlib, TAG.Tool.Sklearn, TAG.Concept.NN, TAG.Concept.ML],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/RedWineClassifier'
                }
            ]
        },
        {
            thumbnail: serv2uWebsite,
            title: 'Serv2U',
            body: 'Online web marketplace for people to order meals prepared by homecooks and having it delivered to their doorstep.',
            tags: [TAG.Concept.Fremp, TAG.Framework.ReactJs, TAG.Tool.Mongodb, TAG.Framework.Flask, TAG.Tool.Gcp, TAG.Tool.Redux, TAG.Tool.Heroku, TAG.Language.Jsx],
            titleLink: 'https://www.serv2u.org',
            links: [
                {
                    logo: <AiOutlineTwitter className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://twitter.com/serv2_u'
                },
                {
                    logo: <AiFillInstagram className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://www.instagram.com/serv.2u'
                }
            ]
        },
        {
            thumbnail: keyHaven,
            isRounded: true,
            title: 'KeyHaven',
            body: 'Password manager with advanced encryption and top-notch security. Data organization, collaboration, and security are the highlighting features of the product.',
            tags: [TAG.Framework.ReactTs, TAG.Tool.Postgres, TAG.Tool.Elephant, TAG.Framework.Express, TAG.Tool.Tailwind, TAG.Tool.RedisCache, TAG.Tool.Docker, TAG.Language.Jsx, TAG.Framework.Nodets, TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/KeyHaven'
                }
            ]
        },
        {
            thumbnail: tripTailor,
            title: 'TripTailor',
            titleLink: 'https://triptailor.onrender.com/chooseCountry',
            body: 'Intuitive AI platform that enables you to intelligently make your travel plans for any country in the world with ease.',
            tags: [TAG.Framework.ReactJs, TAG.Tool.Postgres, TAG.Tool.Elephant, TAG.Framework.Flask, TAG.Tool.Cohere, TAG.Tool.Unsplash, TAG.Tool.Render, TAG.Language.Jsx, TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/orgs/uofthackx-geese/repositories'
                },
                {
                    logo: <SiDevpost className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://devpost.com/software/triptailor'
                }
            ]
        },
        {
            thumbnail: speedyMathDemo,
            title: 'Speedy Math',
            body: 'iOS application that is intended for young students to have fun practicing their arithmetic skills.',
            tags: [TAG.Tool.Xcode, TAG.Language.Swift, TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/Speedy_Math'
                }
            ],
            isRounded: true
        },
        {
            thumbnail: connectPlus,
            title: 'Connect+',
            body: 'Digital version of the classic physical board game, Connect4, but reimagined with additional unique features that make the game more enjoyable.',
            tags: [TAG.Language.C, TAG.Tool.Git],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/Connect_Plus'
                },
                {
                    logo: <SiDevpost className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://devpost.com/software/connectx-9sw36e'
                }
            ]
        }
    ]
    return (
            <section className={mode === 'day' ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}>
                <Link smooth={true} className='FeaturedProjects'/>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid sm:content-center lg:gap-4 md:gap-4 mx-4 sm:grid-cols-12 justify-center">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-700">
                                <h3 className="text-3xl font-semibold">Featured Projects</h3>
                            </div>
                        </div>
                        <div className={`relative grid gap-x-grid gap-y-8 grd:grid-cols-2 ${mode === 'day' ? 'text-gray-800' : 'text-white'}`}>
                            {projects.map(project =>
                                <div className={mode === 'day' ? "card  w-80 sm:w-96 bg-gray-300 shadow-xl border border-gray-400" : "card  w-80 sm:w-96 bg-base-100 shadow-xl border border-gray-700"}>
                                    <figure><img className={project.isRounded ? "h-grd rounded-xl mt-3" : "grd:h-grd"} src={project.thumbnail} alt={project.title}/></figure>
                                    <div className="card-body">
                                        <h2 className={project.isRounded ? "card-title justify-between -mt-3" : "card-title justify-between"}>
                                            {project.titleLink ? 
                                                <a href={project.titleLink} title={project.title} target="_blank" className="cursor-pointer hover:text-gray-300 transition-colors duration-200">{project.title}</a>:
                                                project.title
                                            }
                                            <div className="flex gap-4">
                                                {project.links?.map(icon =>
                                                    <a
                                                    href={icon.link}
                                                    target="_blank"
                                                    >
                                                        {icon.logo}
                                                    </a>
                                                )}
                                            </div>
                                        </h2>
                                        <p>{project.body}</p>
                                        <p></p>
                                        <div className="card-actions justify-end">
                                            {project.tags.map(tag =>
                                                <div className="badge badge-outline">{tag}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> 
                    </div>
                </div>
            </section>
    )
}

export default FeaturedProjects