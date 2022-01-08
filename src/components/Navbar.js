import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='upperNavbar'>
                
                <div className="navbar__logo">
                    <h1 className='navbar__logo-h1'>RETO+300</h1>
                </div>

                <div className='navbar__titulo'>
                    <h1 className='navbar__titulo-h1'> PREGUNTAS ICFES</h1>
                </div>

                <div className='navbar__redes'>
                    <a href={'https://youtube.com'}><i class="fab fa-youtube"></i></a>
                    <a href={'https://facebook.com'}><i class="fab fa-facebook-f"></i></a>
                    <a href={'https://instagram.com'}><i class="fab fa-instagram"></i></a>
                    <a href={'https://twitter.com'}><i class="fab fa-twitter"></i></a>
                </div>

            </div>

            <div className='downerNavbar'>
                <ul className='downerNavbar__ul'>
                    <li className='downerNavbar__ul-li'>Inicio</li>
                    <li className='downerNavbar__ul-li'>Preguntas</li>
                    <li className='downerNavbar__ul-li'>About</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
