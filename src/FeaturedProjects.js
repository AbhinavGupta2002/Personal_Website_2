import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-scroll'
import {BsGithub} from 'react-icons/bs'
import {TbApi} from 'react-icons/tb'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {SiDevpost} from 'react-icons/si'

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
    Language: { Python: 'Python', Jsx: 'JSX/CSS', Swift: 'Swift', C: 'C' },
    Tool: { Git: 'Git', Redux: 'Redux', Tailwind: 'TailwindCSS', Numpy: 'NumPy', Matplotlib: 'Matplotlib', Sklearn: 'SkLearn', Mongodb: 'MongoDB', Chromadb: 'Chroma VectorDB', Supabase: 'Supabase', Gcp: 'GCP', Aws: 'AWS', Cohere: 'Cohere API', Heroku: 'Heroku', Elephant: 'ElephantSQL', Unsplash: 'Unsplash API', Render: 'Render', RedisCache: 'Redis Cache', Docker: 'Docker', Xcode: 'XCode', Postgres: 'PostgreSQL', OpenAi: 'OpenAI' },
    Framework: { ReactJs: 'React JS', ReactTs: 'React TS', Flask: 'Flask', FastApi: 'FastAPI', Express: 'Express', Nodets: 'Node TS', Langchain: 'Langchain' },
    Concept: { NN: 'Neural Networks', ML: 'Machine Learning', Llm: 'LLM', Fremp: 'FReMP', Rag: 'RAG' }
}

const iconClass = 'hover:text-blue-500 cursor-pointer transition-colors duration-200';

export const FeaturedProjects = () => {
    const mode = useSelector((state) => state.mode)
    const projects = [
        {
            thumbnail: personalWebsite, title: 'Personal Website',
            body: 'Responsive two-themed website to display my skills to colleagues, friends, and recruiters.',
            tags: [TAG.Framework.ReactJs, TAG.Tool.Redux, TAG.Tool.Tailwind, TAG.Tool.Git],
            links: [{ logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/Personal_Website_2' }]
        },
        {
            thumbnail: tinyGen, title: 'TinyGen',
            body: 'AI-powered API service that can fix/modify your code on GitHub in seconds, based on your request.',
            tags: [TAG.Language.Python, TAG.Framework.FastApi, TAG.Concept.Llm, TAG.Tool.OpenAi, TAG.Tool.Supabase, TAG.Framework.Langchain, TAG.Tool.Render, TAG.Tool.Git],
            links: [
                { logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/TinyGen' },
                { logo: <TbApi className={`${iconClass} text-2xl`}/>, link: 'https://tinygen-terq.onrender.com/docs' }
            ]
        },
        {
            thumbnail: aiWebscraper, title: 'AI Company Analysis',
            body: 'AI-powered API service that can get an overview, industries, operations, and services of any company in the world from just their website URL. [Not Open Source]',
            tags: [TAG.Language.Python, TAG.Framework.FastApi, TAG.Concept.Llm, TAG.Tool.OpenAi, TAG.Tool.Docker, TAG.Tool.RedisCache, TAG.Framework.Langchain, TAG.Concept.Rag, TAG.Tool.Chromadb, TAG.Tool.Git],
        },
        {
            thumbnail: deepNN, title: 'Red Wine Classifier',
            body: 'Non-linear feedforward deep neural network to predict the quality of red wine, given its physical attributes.',
            tags: [TAG.Language.Python, TAG.Tool.Numpy, TAG.Tool.Matplotlib, TAG.Tool.Sklearn, TAG.Concept.NN, TAG.Concept.ML],
            links: [{ logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/RedWineClassifier' }]
        },
        {
            thumbnail: serv2uWebsite, title: 'Serv2U',
            body: 'Online web marketplace for people to order meals prepared by homecooks and having it delivered to their doorstep. [Not Open Source]',
            tags: [TAG.Concept.Fremp, TAG.Framework.ReactJs, TAG.Tool.Mongodb, TAG.Framework.Flask, TAG.Tool.Gcp, TAG.Tool.Redux, TAG.Tool.Heroku, TAG.Language.Jsx],
            titleLink: 'https://www.serv2u.org',
            links: [
                { logo: <AiOutlineTwitter className={iconClass}/>, link: 'https://twitter.com/serv2_u' },
                { logo: <AiFillInstagram className={iconClass}/>, link: 'https://www.instagram.com/serv.2u' }
            ]
        },
        {
            thumbnail: keyHaven, isRounded: true, title: 'KeyHaven',
            body: 'Password manager with advanced encryption and top-notch security. Data organization, collaboration, and security are the highlighting features of the product.',
            tags: [TAG.Framework.ReactTs, TAG.Tool.Postgres, TAG.Tool.Elephant, TAG.Framework.Express, TAG.Tool.Tailwind, TAG.Tool.RedisCache, TAG.Tool.Docker, TAG.Language.Jsx, TAG.Framework.Nodets, TAG.Tool.Git],
            links: [{ logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/KeyHaven' }]
        },
        {
            thumbnail: tripTailor, title: 'TripTailor', titleLink: 'https://triptailor.onrender.com/chooseCountry',
            body: 'Intuitive AI platform that enables you to intelligently make your travel plans for any country in the world with ease.',
            tags: [TAG.Framework.ReactJs, TAG.Tool.Postgres, TAG.Tool.Elephant, TAG.Framework.Flask, TAG.Tool.Cohere, TAG.Tool.Unsplash, TAG.Tool.Render, TAG.Language.Jsx, TAG.Tool.Git],
            links: [
                { logo: <BsGithub className={iconClass}/>, link: 'https://github.com/orgs/uofthackx-geese/repositories' },
                { logo: <SiDevpost className={iconClass}/>, link: 'https://devpost.com/software/triptailor' }
            ]
        },
        {
            thumbnail: speedyMathDemo, title: 'Speedy Math', isRounded: true,
            body: 'iOS application that is intended for young students to have fun practicing their arithmetic skills.',
            tags: [TAG.Tool.Xcode, TAG.Language.Swift, TAG.Tool.Git],
            links: [{ logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/Speedy_Math' }]
        },
        {
            thumbnail: connectPlus, title: 'Connect+',
            body: 'Digital version of the classic physical board game, Connect4, but reimagined with additional unique features that make the game more enjoyable.',
            tags: [TAG.Language.C, TAG.Tool.Git],
            links: [
                { logo: <BsGithub className={iconClass}/>, link: 'https://github.com/AbhinavGupta2002/Connect_Plus' },
                { logo: <SiDevpost className={iconClass}/>, link: 'https://devpost.com/software/connectx-9sw36e' }
            ]
        }
    ]

    return (
        <section className={mode === 'day' ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-white'}>
            <Link smooth={true} className='FeaturedProjects'/>
            <div className="container max-w-6xl px-4 py-20 mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-block w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-5" />
                    <h3 className="text-3xl font-bold">Featured Projects</h3>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) =>
                        <div
                            key={project.title}
                            data-aos="fade-up"
                            data-aos-delay={i % 3 * 100}
                            className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${mode === 'day'
                                ? 'bg-white shadow-md ring-1 ring-slate-200/60 hover:shadow-blue-100/50'
                                : 'bg-slate-900/80 shadow-lg ring-1 ring-slate-700/50 hover:shadow-blue-900/20'}`}
                        >
                            <div className="overflow-hidden">
                                <img
                                    className={`w-full transition-transform duration-500 group-hover:scale-105 ${project.isRounded ? 'h-48 object-contain p-1' : 'h-48 object-cover'}`}
                                    src={project.thumbnail}
                                    alt={project.title}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-lg font-semibold">
                                        {project.titleLink ? (
                                            <a href={project.titleLink} target="_blank" rel="noreferrer"
                                               className="hover:text-blue-500 transition-colors duration-200">{project.title}</a>
                                        ) : project.title}
                                    </h4>
                                    <div className="flex gap-3 ml-2 mt-0.5 text-lg">
                                        {project.links?.map((icon, j) =>
                                            <a key={j} href={icon.link} target="_blank" rel="noreferrer">{icon.logo}</a>
                                        )}
                                    </div>
                                </div>
                                <p className={`text-sm leading-relaxed mb-4 ${mode === 'day' ? 'text-slate-600' : 'text-slate-400'}`}>
                                    {project.body}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map(tag =>
                                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${mode === 'day'
                                            ? 'bg-slate-100 text-slate-600'
                                            : 'bg-slate-800 text-slate-400'}`}>
                                            {tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects
