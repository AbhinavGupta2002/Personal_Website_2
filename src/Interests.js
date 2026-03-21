import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'

const interests = [
    { emoji: '🎶', label: 'Music' },
    { emoji: '🏸', label: 'Badminton' },
    { emoji: '🖥', label: 'Web Development' },
    { emoji: '🎮', label: 'Video Games' },
];

export const Interests = () => {
    const mode = useSelector((state) => state.mode)

    return (
        <div className={mode === 'day' ? 'bg-white' : 'bg-slate-900'}>
            <Link smooth={true} className="Interests"/>
            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="text-center mb-14" data-aos="fade-up">
                    <div className="inline-block w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-5" />
                    <h3 className={`text-3xl font-bold ${mode === 'day' ? 'text-slate-900' : 'text-white'}`}>Interests</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {interests.map((item, i) => (
                        <div
                            key={item.label}
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                            className={`group flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${mode === 'day'
                                ? 'bg-slate-100 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200/50 ring-1 ring-slate-300'
                                : 'bg-slate-800/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-900/20 ring-1 ring-slate-700/50'}`}
                        >
                            <span className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {item.emoji}
                            </span>
                            <p className={`text-sm font-semibold tracking-wider uppercase ${mode === 'day' ? 'text-slate-700' : 'text-slate-300'}`}>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Interests
