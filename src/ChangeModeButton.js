import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './ReduxStates/index'

const ChangeModeButton = () => {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()
  const { toggleMode } = bindActionCreators(actions, dispatch)

  return (
    <button
      className={`fixed bottom-5 right-5 z-40 p-3.5 rounded-xl backdrop-blur-md shadow-lg ring-1 hover:shadow-xl transition-all duration-300 ${mode === 'day'
        ? 'bg-slate-200 ring-slate-300 hover:ring-blue-300 text-slate-700 shadow-slate-300/50'
        : 'bg-slate-800/90 ring-slate-700 hover:ring-slate-600 text-slate-400 shadow-black/30'}`}
      onClick={() => mode === 'day' ? toggleMode('night') : toggleMode('day')}
      aria-label={`Switch to ${mode === 'day' ? 'dark' : 'light'} mode`}
    >
      {mode === 'day' ? <BsFillMoonStarsFill className="w-4 h-4 text-blue-500" /> : <BsFillSunFill className="w-4 h-4 text-amber-400" />}
    </button>
  );
};

export default ChangeModeButton
