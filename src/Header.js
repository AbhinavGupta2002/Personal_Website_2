import React from 'react'
import headshot from './img/headshot2.PNG'
import { useSelector } from 'react-redux'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

export const Header = () => {
  const mode = useSelector((state) => state.mode)

  return (
    <div className={`pt-20 ${mode === 'night' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className={`relative overflow-hidden ${mode === 'night'
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-slate-100 via-blue-100 to-slate-50'}`}>
        {/* Decorative gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative px-4 py-20 mx-auto max-w-6xl md:px-8 lg:py-28">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="lg:max-w-xl text-center lg:text-left" data-aos="fade-right">
              <div className="mb-3 flex justify-center lg:justify-start">
                <span className={`inline-block px-3 pt-2 pb-1.5 text-xs font-semibold tracking-wider uppercase rounded-full leading-none ${mode === 'day'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-blue-500/10 text-blue-400'}`}>
                  Software Engineer
                </span>
              </div>
              <h1 className={`mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${mode === 'day' ? 'text-slate-900' : 'text-white'}`}>
                <TypeAnimation
                  sequence={[
                    "Hi, I'm Abhinav",
                    2000,
                    "I build at Amazon",
                    2000,
                    "I love building software",
                    2000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                  wrapper="span"
                />
                <span className="inline-block ml-2">👨‍💻</span>
              </h1>
              <div className={`space-y-4 text-lg leading-relaxed ${mode === 'day' ? 'text-slate-600' : 'text-slate-400'}`}>
                <p>
                  I am a Software Development Engineer at <strong className={mode === 'day' ? 'text-slate-800' : 'text-slate-200'}>Amazon</strong>, building GenAI-powered products for Alexa at scale.
                </p>
                <p>
                  I graduated from the <strong className={mode === 'day' ? 'text-slate-800' : 'text-slate-200'}>University of Waterloo</strong> with an Honours Bachelor of Computer Science specializing in Software Engineering.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                {[
                  { href: 'https://github.com/AbhinavGupta2002', label: 'GitHub', icon: <BsGithub className="w-5 h-5" /> },
                  { href: 'https://www.linkedin.com/in/abhinavgupta2002', label: 'LinkedIn', icon: <BsLinkedin className="w-5 h-5" /> },
                  { href: 'https://devpost.com/AbhinavGupta2002', label: 'Devpost', icon: <SiDevpost className="w-5 h-5" /> },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-xl transition-all duration-200 ${mode === 'day'
                      ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-slate-400 hover:text-blue-400 hover:bg-blue-500/10'}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative w-56 sm:w-72 lg:w-5/12" data-aos="fade-left" data-aos-delay="200">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-20 scale-105`} />
              <img
                className={`relative object-cover w-full rounded-2xl shadow-2xl aspect-square ${mode === 'day'
                  ? 'ring-1 ring-slate-200'
                  : 'ring-1 ring-slate-700'}`}
                src={headshot}
                alt="Abhinav Gupta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header
