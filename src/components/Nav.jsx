import React,{useState,useContext, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Context } from '../Context/Context';
import { decrementAll } from '../Store/basketSlice';
import Avatar from "../images/image-avatar.png";
import thumbnailFirst from "../images/image-product-1-thumbnail.jpg";
import Logo from "../images/logo.svg";

const ImageUrl = {
  1 : thumbnailFirst
}


function Nav(){
  const [activeButton,setActiveButton] = useState(false);
  const {setPopupActive,setSideBarActive,sideBarActive} = useContext(Context);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [active,setActive] = useState(false);

  const handleSideBar = () => {
    setSideBarActive(true);
    console.log(sideBarActive);
  }

  useEffect(() => {
    const handleResize = (e) => {
      if(window.innerWidth <= 800) {
        setActiveButton(true);
        setPopupActive(false);
      }
      else setActiveButton(false);
    }
    window.addEventListener('resize',handleResize)
    return window.removeEventListener('resize',(e) => console.log);
  },[])

  return (
    <nav>
      <ol className='nav-bar'>
        <li onClick={handleSideBar}>
        <span className="material-symbols-outlined">
          menu
        </span>
        </li>
        <li><img src={Logo} alt="Logo" /></li>
        <li><a href="">Collections</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Women</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ol>

      <div className="profile">
        <div>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/>
        </svg>
        <div className="number-icon">{basket.number}</div>
        </div>
        <img src={Avatar} alt="Avatar" onClick={() => setActive(!active)} />
      </div>

      {active &&     
      <div className="Cart">
        <h1>Cart</h1>
        <div className="basket">
          {basket.number === 0 ? "Your cart is empty." : 
            <div className="items">
              <img src={ImageUrl[basket.id]} alt="Item" />
              <div>
                <div className="name">{basket.name}</div>
                <div className="price">
                 ${basket.price} x {basket.number}  <span className='bold'>${basket.price*basket.number}</span>
                </div>
              </div>
              <svg onClick={() => dispatch(decrementAll())} width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs>
              <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a"/>
              </svg>
            </div>}
            {basket.number !== 0 &&  <button
              disabled={activeButton}
              onClick={() => setPopupActive(true)}
              className='primary'>Checkout</button>}
        </div>
      </div>}
    </nav>
  )
}

export default Nav;
