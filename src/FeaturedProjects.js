import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-scroll'
import {BsGithub} from 'react-icons/bs'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {SiDevpost} from 'react-icons/si'

// Local Imports
import personalWebsite from './img/personalWebsite.png'
import serv2uWebsite from './img/serv2uWebsite.png'
import speedyMathDemo from './img/speedyMathDemo.gif'
import connectPlus from './img/connectPlus.jpg'

export const FeaturedProjects = () => {
    const mode = useSelector((state) => state.mode) // redux state
    const projects = [
        {
            thumbnail: personalWebsite,
            title: 'Personal Website',
            body: 'Responsive website developed, from scratch, to display my skills to colleagues, friends, and recruiters.',
            tags: ['React JS', 'Redux', 'TailwindCSS', 'Git'],
            links: [
                {
                    logo: <BsGithub className='hover:text-blue-600 cursor-pointer transition-colors duration-200'/>,
                    link: 'https://github.com/AbhinavGupta2002/Personal_Website_2'
                }
            ]
        },
        {
            thumbnail: serv2uWebsite,
            title: 'Serv2U',
            body: 'Website being developed for my startup, which is a marketplace for people to order meals prepared by homecooks and having it delivered to their doorstep.',
            tags: ['FReMP', 'React JS', 'MongoDB', 'Flask', 'GCP', 'JSX/CSS', 'Redux', 'Heroku'],
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
            thumbnail: speedyMathDemo,
            title: 'Speedy Math',
            body: 'iOS application that is intended for young students to have fun practicing their arithmetic skills.',
            tags: ['XCode', 'Swift', 'Git'],
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
            tags: ['C', 'Git'],
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
            <section className={mode === 'day' ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-white"}>
                <Link smooth={true} className='FeaturedProjects'/>
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid sm:content-center lg:gap-4 md:gap-4 mx-4 sm:grid-cols-12 justify-center">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-700">
                                <h3 className="text-3xl font-semibold">Featured Projects</h3>
                            </div>
                        </div>
                        <div className="relative grid gap-x-grid gap-y-8 grd:grid-cols-2 text-white">
                            {projects.map(project =>
                                <div className={mode === 'day' ? "card  w-80 sm:w-96 bg-base-100 shadow-xl border border-gray-200" : "card  w-80 sm:w-96 bg-base-100 shadow-xl border border-gray-800"}>
                                    <figure><img className={project.isRounded ? "h-grd rounded-xl mt-3" : "grd:h-grd"} src={project.thumbnail} alt={project.title}/></figure>
                                    <div className="card-body">
                                        <h2 className={project.isRounded ? "card-title justify-between -mt-3" : "card-title justify-between"}>
                                            {project.titleLink ? 
                                                <a href={project.titleLink} title={project.title} target="_blank" className="cursor-pointer hover:text-gray-300 transition-colors duration-200">{project.title}</a>:
                                                project.title
                                            }
                                            <div className="flex gap-4">
                                                {project.links.map(icon =>
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