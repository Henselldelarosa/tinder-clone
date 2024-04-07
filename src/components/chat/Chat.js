import React from 'react'
import './Chat.scss'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

const Chat = ({name, message, profilePic, timeStamp}) => {
  return (
    <Link className='link' to={`/chat/:${name}`}>
      <div className='chat'>
        <Avatar className='chat__image' src={profilePic} alt={name}/>

        <div className='chat__container'>
          <h2 className='chat__name'>{name}</h2>
          <p className='chat__message'>{message}</p>
        </div>
        <p className='chat__time'>{timeStamp}</p>
      </div>
    </Link>
  )
}

export default Chat
