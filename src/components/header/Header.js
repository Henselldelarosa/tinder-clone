import React from 'react'
import './Header.scss'
import {Person, Forum, IButton, ArrowBackIcon} from '../../exports'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({backButton}) => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      {backButton ? (
        <IButton onClick={() => navigate('/')}>
          <ArrowBackIcon className='header__icon' fontSize='large'/>
        </IButton>
      ):(
      <IButton>
        <Person className='header__icon' fontSize='large'/>
      </IButton>
      )}

      <Link to='/'>
        <IButton>
          <img
          src="img/tinder-logo.svg"
          alt="tinder logo "
          className="header__logo"
          />
        </IButton>
      </Link>

      <Link to='/chat'>
        <IButton>
          <Forum className='header__icon' fontSize='large'/>
        </IButton>
      </Link>
    </div>
  )
}

export default Header
