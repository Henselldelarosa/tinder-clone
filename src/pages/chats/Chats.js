import React from 'react'
import { Chat } from '../../exports'

const Chats = () => {
  return (
    <div>
      <Chat
        name='Emely Osmet'
        profilePic={'img/emely-osmet.jpg'}
        message= 'Hello'
        timeStamp ='5 minutes ago'
      />

      <Chat
        name='Beyonce'
        profilePic={'img/beyonce.jpg'}
        message= 'Hey hows everything?'
        timeStamp ='30 minutes ago'
      />

      <Chat
        name='Thalia'
        profilePic={'img/thalia.jpg'}
        message= 'Hello'
        timeStamp ='31 minutes ago'
      />

      <Chat
        name='Angelina'
        profilePic={'img/angelina-jolie.jpg'}
        message= 'Hows your day?'
        timeStamp ='50 minutes ago'
      />
    </div>
  )
}

export default Chats
