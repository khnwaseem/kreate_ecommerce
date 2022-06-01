import React from 'react'
import { NavLink } from "react-router-dom";
import style from '../assets/css/footer.module.css'


const Footer = () => {
  return (
    <footer id={style.footer}>
      <div className={style.container__footer}>
        <div className={style.footer__nav}>
          <div className={style.footer__nav__job}>
            <ul>
              <li className={style.footer__nav__job__header}>
                <NavLink to='/'>ONLINE SHOPPING</NavLink>
              </li>
              <li className={style.footer__nav__job__link}>
                <NavLink to='/'>Personal Care</NavLink>
              </li>
              <li className={style.footer__nav__job__link}>
                <NavLink to='/'>Food</NavLink>
              </li>
              <li className={style.footer__nav__job__link}>
                <NavLink to='/'>Accessories</NavLink>
              </li>
              <li className={style.footer__nav__job__link}>
                <NavLink to='/'>Gifting</NavLink>
              </li>
            </ul>
          </div>
          <div className={style.footer__nav__resources}>
            <ul>
              <li className={style.footer__nav__resources__header}>
                <NavLink to='/'>USEFUL LINKS</NavLink>
              </li>
              <li className={style.footer__nav__resources__link}>
                <NavLink to='/'>Sell on Kreate</NavLink>
              </li>
              <li className={style.footer__nav__resources__link}>
                <NavLink to='/'>Friend of Kreate</NavLink>
              </li>
              <li className={style.footer__nav__resources__link}>
                <NavLink to='/'>About</NavLink>
              </li>
              <li className={style.footer__nav__resources__link}>
                <NavLink to='/'>FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className={style.footer__nav__needhelp}>
            <ul>
              <li className={style.footer__nav__needhelp__header}>
                <NavLink to='/'>Need Help?</NavLink>
              </li>
              <li className={style.footer__nav__needhelp__link}>
                <NavLink to='/'>Help Center</NavLink>
              </li>
              <li className={style.footer__nav__needhelp__link}>
                <NavLink to='/'>About Us</NavLink>
              </li>
              <li className={style.footer__nav__needhelp__link}>
                <NavLink to='/'>Terms</NavLink>
              </li>
              <li className={style.footer__nav__needhelp__link}>
                <NavLink to='/'>Privacy Center</NavLink>
              </li>
            </ul>
          </div>
          <div className={style.footer__nav__social}>
            <ul>
              <li className={style.footer__nav__social__header}>
                <NavLink to='/'>Stay Connected</NavLink>
              </li>
              <div>
              <li className={style.footer__nav__social__link}>
                <NavLink to='/'><img alt="facebook" width="20" src="https://cdn.shopify.com/s/files/1/0072/5467/1433/t/42/assets/facebook-icon.png?v=6361375980349262153" /></NavLink>
              </li>
              <li className={style.footer__nav__social__link}>
                <NavLink to='/'><img alt="instagram" width="20" src="https://cdn.shopify.com/s/files/1/0072/5467/1433/t/42/assets/instagram-icon.png?v=9317041580275696902" /></NavLink>
              </li>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer