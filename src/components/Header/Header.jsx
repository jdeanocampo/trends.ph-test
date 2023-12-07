import React, {useRef, useEffect } from 'react'
import './header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import logo from '../../assets/images/tp2.png'


const nav__links = [
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'categories',
    display:'Categories'
  },
  {
    path:'aboutus',
    display:'AboutUs'
  },
  
]
const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)

  const menuRef = useRef(null)
  const navigate = useNavigate()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
      stickyHeaderFunc()

      return()=> window.removeEventListener("scroll", stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  
const framerSidebarPanel = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}

const navigateToCart = () =>{
  navigate('/cart')
}

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
          <motion.div {...framerSidebarPanel} className="mobile__menu">
              <span onClick={menuToggle}><i class="ri-menu-2-line"></i></span>
            </motion.div>

            <div className="logo">
              <img src={logo} alt="Trends.PH logo" className='header__logo'/>
              <div>
                <h1>TRENDS.PH</h1>
              </div>
            </div>

            <motion.div {...framerSidebarPanel} className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                
              <motion.span whileTap={{scale: 1.2}} className='mobile__menu'><i class="ri-close-fill"></i></motion.span>
                {
                  nav__links.map((item, index) => (
                    <motion.li whileHover={{scale: 1.1, color: "#BCC9D3"}} whileTap={{scale: 1.2}} className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                    </motion.li>
                  ))
                }
              </ul>
            </motion.div>

            <div className="nav__icons">

              <motion.span   whileHover={{scale: 1.2}} className="fav__icon"><motion.i whileHover={{scale: 1.1}} class="ri-heart-fill"/>
              <span className='badge'>1</span></motion.span>

              <motion.span  whileHover={{scale: 1.2}} className='cart__icon' onClick={navigateToCart}><i class="ri-shopping-cart-2-fill"/><span className='badge'>{totalQuantity}</span>
              </motion.span>
              <motion.span   whileHover={{scale: 1.2}} className="fav__icon"><i class="ri-user-fill"></i></motion.span>
              
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  )
}


export default Header