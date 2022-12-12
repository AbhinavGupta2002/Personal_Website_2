import React, { useEffect, useState } from 'react';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './ReduxStates/index'

const ChangeModeButton = () => {
  const [mobileLayout, setMobileLayout] = useState(false)
  // redux values
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()
  const {toggleMode} = bindActionCreators(actions, dispatch)

  useEffect(() => {
    const handleLayout = () => {
      setMobileLayout(window.innerWidth <= 585)
    }
    window.addEventListener("scroll", handleLayout)
    return () => window.removeEventListener("scroll", handleLayout)
  })
  return (
    <button
    className={mobileLayout ? "px-5 py-3 rounded bg-slate-300 hover:bg-slate-400 fixed bottom-5 right-5 text-black opacity-80" : "px-5 py-3 rounded bg-slate-300 hover:bg-slate-400 fixed bottom-5 right-5 text-black"}
    onClick={() => mode === 'day' ? toggleMode('night') : toggleMode('day')}>
        {mode === 'day' ? <BsFillMoonStarsFill style={{fontSize: '110%'}}/> : <BsFillSunFill style={{fontSize: '110%'}}/>}
    </button>
  );
};

export default ChangeModeButton
