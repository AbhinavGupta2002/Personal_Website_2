import React from 'react'
import { useSelector } from 'react-redux'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const Footer = () => {
    const mode = useSelector((state) => state.mode)

    return (
        <footer className={`border-t ${mode === 'day' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'}`}>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className={`text-sm ${mode === 'day' ? 'text-slate-500' : 'text-slate-500'}`}>
                        &copy; {new Date().getFullYear()} Abhinav Gupta
                    </p>
                    <div className="flex items-center gap-4">
                        {[
                            { href: 'https://github.com/AbhinavGupta2002', label: 'GitHub', icon: <BsGithub className="w-4 h-4" /> },
                            { href: 'https://www.linkedin.com/in/abhinavgupta2002', label: 'LinkedIn', icon: <BsLinkedin className="w-4 h-4" /> },
                            { href: 'https://devpost.com/AbhinavGupta2002', label: 'Devpost', icon: <SiDevpost className="w-4 h-4" /> },
                        ].map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-2 rounded-lg transition-colors duration-200 ${mode === 'day'
                                    ? 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                                    : 'text-slate-500 hover:text-blue-400 hover:bg-blue-500/10'}`}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
