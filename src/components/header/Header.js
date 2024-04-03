import React from 'react'
import './Header.scss'
import {Person, Forum, IButton} from '../../exports'

const Header = () => {
  return (
    <div className='header'>
      <IButton>
        <Person className='header__icon' fontSize='large'/>
      </IButton>

      <IButton>
        <img
        src="img/tinder-logo.svg"
        alt="tinder logo "
        className="header__logo"
        />
      </IButton>

      <IButton>
        <Forum className='header__icon' fontSize='large'/>
      </IButton>
    </div>
  )
}

export default Header
