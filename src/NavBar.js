import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import resume from './Resume/resume.pdf'
import { Link } from 'react-scroll'

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mode = useSelector((state) => state.mode)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navBg = mode === 'night'
        ? (scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-slate-900/20' : 'bg-slate-900')
        : (scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-slate-200/40' : 'bg-slate-50');

    const linkClass = mode === 'day'
        ? 'font-medium tracking-wide text-slate-700 transition-colors duration-200 hover:text-blue-600 cursor-pointer'
        : 'font-medium tracking-wide text-slate-300 transition-colors duration-200 hover:text-blue-400 cursor-pointer';

    const mobileLinkClass = mode === 'day'
        ? 'block py-2 font-medium tracking-wide text-slate-700 transition-colors duration-200 hover:text-blue-600 cursor-pointer'
        : 'block py-2 font-medium tracking-wide text-slate-300 transition-colors duration-200 hover:text-blue-400 cursor-pointer';

    return (
      <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="px-4 py-4 mx-auto max-w-6xl md:px-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="Home"
              className="inline-flex items-center group"
            >
              <span className={`text-xl font-bold tracking-wide uppercase ${mode === 'day' ? 'text-slate-900' : 'text-white'}`}>
                Abhinav Gupta
              </span>
            </a>
            <ul className="hidden items-center space-x-8 lg:flex">
              <li className={linkClass}>
                <Link smooth={true} to='WorkExperience' offset={-80}>Work Experience</Link>
              </li>
              <li className={linkClass}>
                <Link smooth={true} to='FeaturedProjects' offset={-80}>Projects</Link>
              </li>
              <li className={linkClass}>
                <Link smooth={true} to='Interests' offset={-80}>Interests</Link>
              </li>
              <li>
                <a
                  href={resume}
                  aria-label="My Resume"
                  title="Resume"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="mailto:a363gupt@uwaterloo.ca"
                  className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
                >
                  Contact Me
                </a>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                className={`p-2 rounded-lg transition-colors ${mode === 'day' ? 'hover:bg-slate-200' : 'hover:bg-slate-800'}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className={`w-6 h-6 ${mode === 'day' ? 'text-slate-700' : 'text-slate-300'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsMenuOpen(false)} />
          <div
            className={`absolute top-4 right-4 w-64 rounded-2xl shadow-2xl ring-1 overflow-hidden ${mode === 'day'
              ? 'bg-white ring-slate-200'
              : 'bg-slate-900 ring-slate-700'}`}
            style={{ zIndex: 101 }}
          >
            <div className={`flex items-center justify-between px-5 pt-4 pb-3`}>
              <span className={`text-sm font-bold uppercase tracking-wider ${mode === 'day' ? 'text-slate-400' : 'text-slate-500'}`}>
                Menu
              </span>
              <button
                aria-label="Close Menu"
                className={`p-1.5 rounded-lg transition-colors ${mode === 'day' ? 'hover:bg-slate-100 text-slate-500' : 'hover:bg-slate-800 text-slate-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-3 pb-4 space-y-0.5">
              {[
                { to: 'WorkExperience', label: 'Work Experience' },
                { to: 'FeaturedProjects', label: 'Projects' },
                { to: 'Interests', label: 'Interests' },
              ].map(item => (
                <Link
                  key={item.to}
                  smooth={true}
                  to={item.to}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl font-medium tracking-wide cursor-pointer transition-colors ${mode === 'day'
                    ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl font-medium tracking-wide transition-colors ${mode === 'day'
                  ? 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'}`}
              >
                Resume
              </a>
              <div className="pt-2 px-1">
                <a
                  href="mailto:a363gupt@uwaterloo.ca"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center py-2.5 text-sm font-medium tracking-wide text-white rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </>
    );
  };

export default NavBar
