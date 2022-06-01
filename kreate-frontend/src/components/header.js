import React, {useState} from 'react'
import style from  '../assets/css/header.module.css'
import { NavLink } from "react-router-dom";
import Navigation from './navigation'
import {useSelector} from "react-redux"


const Header = () => {

    // const [open,setOpen] = useState(false)

    const [active,setActive] = useState(false)

    const activeClickHandler = () => {
      setActive(!active)
    }

    const addToCartselector = useSelector((state) => state.addToCart)
   
    console.log(addToCartselector)

 const valueActive = active ? "active" : ""

  return (
     <div className={style.container__header}>

        <div className={style.header}>
           <div className={style.header__logo}>
                <NavLink to='/'>
                <h2>Kreate Ecommerce</h2>
               </NavLink>
           </div>
           {valueActive === "active" ? <div className={style.mm__menu__sidebar}>
             <div className={style.mm__menu__sidebar__header} onClick={() => (setActive(!active))}>
               <h3>Menu</h3>
             </div>
             <div className={style.mm__menu__sidebar__nav}>
             <Navigation />
             </div>
           </div> :
             ''
          }

           <div className={`${style.m__menu}  + valueActive`} onClick={activeClickHandler}>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <div className={style.header__menu}>
             <div className={style.menu}>
                <Navigation />
           </div>

         </div>
            
     
           <div className={style.header__account}>
           <div className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/cart' style={{display:"flex",alignItems:"center"}}>  
         <div style={{marginRight: "5px"}}><img src="https://kreateworld.in/_next/static/media/cart.1e444a1f.svg" alt="cart"/></div> 
         {addToCartselector && addToCartselector.length >=1 && addToCartselector.length  &&
         <div style={{width:"20px",textAlign: "center",height:"20px",borderRadius: "50%",backgroundColor:"#EF336E",color:"white"}}>
         {addToCartselector && addToCartselector.length >=1 && addToCartselector.length}</div> }
         </NavLink>
        </span>
     </div>
             <div style={{alignSelf:"center"}}>
            <NavLink to='/'><img src="https://kreateworld.in/_next/static/media/profile.825be7ba.svg" alt="account"/></NavLink>
            </div>
           </div>
        </div>
     </div>
  )
}

export default Header
