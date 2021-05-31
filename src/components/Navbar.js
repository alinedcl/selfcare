import React from 'react'
import '../styles/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import cartIcon from '../assets/cart.svg'
import searchIcon from '../assets/search.svg'
import userIcon from '../assets/user.svg'
import logoStar from '../assets/star.svg'

const Header = () => {

  const [searchToggled, setSearchToggled] = useState(false)

  const handleClick = () => {
    searchToggled ? setSearchToggled(false) : setSearchToggled(true)
  }

    return (
        <nav className='navbar'>
          <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to='/' className='logo-icon'>
              <img className='navlogo-star' src={logoStar} />
              <img className='navlogo' src={logo} alt='selfcare' />
            </Link>
          </div>
          
          <div className='navmenu'>
            <ul className='navmenu-items'>
              <li className='search-li'>
                <button className={!searchToggled ? 'search-icon' : 'search-icon-toggled'}
                onClick={handleClick}>
                <img src={searchIcon} alt='busca' />
                </button>
                <span>
                <label>
                <input className={!searchToggled ? 'search-input-off' : 'search-input'} 
                placeholder='O que você está procurando?'>
                </input>
                </label>
                </span> 
                
              </li>
              <li>
                <Link to='/user' className='user-icon'>
                  <img src={userIcon} alt='usuario' />
                </Link>
              </li>
              <li>
              <Link to='cart' className='cart-icon'>
                <img src={cartIcon} alt='carrinho de compras' />
              </Link>
              </li>
            </ul>
          </div>

          </div>
        </nav>
    )
}

export default Header