import React from 'react'
import { NavLink } from "react-router-dom";
import style from  '../assets/css/header.module.css'


const Navigation = ({addToCart}) => {

console.log(addToCart)

  return (
    <React.Fragment>
    <nav className={style.menu__navi}>
   <ul className={style.menu__list}>
     <li className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/products'>Personal Care</NavLink>
        </span>
     </li>

     <li className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/products'>Food</NavLink>
        </span>
     </li>

     <li className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/products'>Home Decor</NavLink>
        </span>
     </li>

     <li className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/products'>Accessories</NavLink>
        </span>
     </li>

     <li className={`${style.menu__item} ${style.submenu__wrapper}`}>
       <span className={style.menu__link}>
         <NavLink to='/products'>Clothing</NavLink>
        </span>
     </li>


   </ul>
   </nav>
    </React.Fragment>
  )
}

export default Navigation