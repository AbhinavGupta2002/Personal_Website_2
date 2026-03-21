import React, { useState, useEffect } from 'react';
import { BsFillCaretUpFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const ScrollTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const mode = useSelector((state) => state.mode)

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 600);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!showScrollTop) return null;

    return (
        <button
            className={`fixed right-5 bottom-[4.5rem] z-40 p-3.5 rounded-xl backdrop-blur-md shadow-lg ring-1 transition-all duration-300 hover:shadow-xl ${mode === 'day'
                ? 'bg-slate-200 ring-slate-300 hover:ring-blue-300 text-slate-700 shadow-slate-300/50'
                : 'bg-slate-800/90 ring-slate-700 hover:ring-slate-600 text-slate-400 shadow-black/30'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
        >
            <BsFillCaretUpFill className="w-4 h-4" />
        </button>
    )
};

export default ScrollTopButton
