import React,{useContext} from 'react'
import { Context } from '../Context/Context';
import Image from './Image'

function Popups() {

  const {prodcutId,setProductId,setPopupActive} = useContext(Context);

  const handlePrev = () => {
    if(prodcutId !== 0) setProductId(prodcutId - 1)
  }

  const handleNext = () => {
    if(prodcutId !== 3) setProductId(prodcutId + 1)
  }


  return (
    <div className='popups'>
      <button onClick={() => setPopupActive(false)} >
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
      </button>
      <button onClick={handlePrev}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </button>
      <Image/>
      <button onClick={handleNext}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </button>
    </div>
  )
}

export default Popups