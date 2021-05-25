import React from 'react'

import logo from './assets/logo.svg'
import cartIcon from './assets/cart.svg'
import searchIcon from './assets/search.svg'
import userIcon from './assets/user.svg'

const Header = () => {
    return (
        <header>
          <div className='header-logo'>
            <img src={logo} alt='selfcafe' />
          </div>
          
          <div className='header-navmenu'>
            <img src={searchIcon} alt='busca' />
            <img src={userIcon} alt='usuario' />
            <img src={cartIcon} alt='carrinho de compras' />
          </div>
        </header>
    )
}

export default Header