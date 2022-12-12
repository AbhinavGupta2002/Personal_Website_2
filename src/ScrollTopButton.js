import React, { useState, useEffect} from 'react';
import {BsFillCaretUpFill} from 'react-icons/bs'

const ScrollTopButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [mobileLayout, setMobileLayout] = useState(false)

    const handleClick = () => {
        setShowScrollTop(false)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const handleLayout = () => {
            const { scrollY, innerWidth } = window;
            setShowScrollTop(scrollY > (innerWidth >= 640 ? 1426 : 2171))
            setMobileLayout(innerWidth <= 585)
        }
        window.addEventListener("scroll", handleLayout)
        return () => window.removeEventListener("scroll", handleLayout)
      })

    return (
        showScrollTop &&
            <button
            className={mobileLayout ? "px-5 py-3 rounded bg-slate-300 hover:bg-slate-400 fixed right-5 text-black opacity-80" : "px-5 py-3 rounded bg-slate-300 hover:bg-slate-400 fixed right-5 text-black"}
            style={{bottom: '4.5rem'}}
            onClick={handleClick}>
                <BsFillCaretUpFill style={{fontSize: '110%'}}/>
            </button>
    )
};

export default ScrollTopButton
