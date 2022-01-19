import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='upperNavbar'>
                
                <div className="navbar__logo">
                    <h1 className='navbar__logo-h1'>RETO+300</h1>
                </div>

                <div className='navbar__redes'>
                    <a className='navbar__redes-tube' href={'https://youtube.com'}><i className="fab fa-youtube"></i></a>
                    <a className='navbar__redes-face' href={'https://facebook.com'}><i className="fab fa-facebook-f"></i></a>
                    <a className='navbar__redes-insta' href={'https://instagram.com'}><i className="fab fa-instagram"></i></a>
                    <a className='navbar__redes-twit' href={'https://twitter.com'}><i className="fab fa-twitter"></i></a>
                </div>

            </div>

            <div className='downerNavbar'>
                <ul className='downerNavbar__ul'>
                    <li className='downerNavbar__ul-li'><a href="/">Inicio</a></li>
                    <li className='downerNavbar__ul-li'><a href='/preg'>Preguntas</a> </li>
                    <li className='downerNavbar__ul-li'><a href='/about'>About</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
