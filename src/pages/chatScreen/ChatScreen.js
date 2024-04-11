import React, {useState} from 'react'
import './ChatScreen.scss'
import { Avatar } from '@mui/material'
import { useParams } from 'react-router'
const ChatScreen = () => {
  const {person} = useParams()
  const personName= person.slice(1)

  const [input, setInput] = useState('')
  const [wantedMessages, setWantedMessages] = useState([])

  const updateInput = (e) => setInput(e.target.value)

  const [messages, setMessages] = useState([
    {
      name: 'Angelina',
      image: '/img/angelina-jolie.jpg',
      message: 'Whats up?'
    },

    {
      name: 'Angelina',
      image: '/img/angelina-jolie.jpg',
      message: 'Hows your day?'
    },

    {
      name: 'Beyonce',
      image: '/img/beyonce.jpg',
      message: 'Hey hows everything?'
    },

    {
      name: 'Thalia',
      image: '/img/thalia.jpg',
      message: 'Hello?'
    },

    {
      name: 'Emely',
      image: '/img/emely-osmet.jpg',
      message: 'Hello'
    },

    {
      message: `Hey ${personName} is good hbu?`
    },
  ])

  // let tempArr = []
  // messages.map((message) => {
  //   if(message.name === personName) tempArr.push(message)
  // })

  // console.log(tempArr)


  console.log(messages)
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages([...messages, {message:input}])
    setInput('')
  }

  // <di className='chatScreen__container'>
        //   <Avatar
        //   className='chatScreen__img'
        //   src={message?.image}
        //   alt={message?.name}
        //   />
        //   <p className='chatScreen__text'>{message.message}</p>
        // </di>
          // ):(
          //   <di className='chatScreen__container'>
          //     <p className='chatScreen__text--user'>{message.message}</p>
          //   </di>
          // )
  return (
    <div className='chatScreen'>
      <p className="chatScreen__matchDate">
        you match with {`${personName}`} on 10/08/20
      </p>

      {messages.map((message) => {

      return(
        message.name?(
        message.name === personName && (
      <div className='chatScreen__container' key={message.name}>
          <Avatar
          className='chatScreen__img'
          src={message?.image}
          alt={message?.name}
          />
          <p className='chatScreen__text'>{message.message}</p>
      </div>
      )
        ):(
        <di className='chatScreen__container'>
          <p className='chatScreen__text--user'>{message.message}</p>
        </di>)
        )
        })}
      {/* {personName === } */}

      {/* {messages.map((message) => {
        message.name ? (

          <>
          {message?.name === personName && (
            <div className='chatScreen__container'>
          {console.log(message.name === personName)}
          {console.log(message.image)}
          <Avatar
          className='chatScreen__img'
          src={message?.image}
          alt={message?.name}
          />
          <p className='chatScreen__text'>{message.message}</p>

        </div>

          )}
          <></>
          </>
        ):(
         <div className='chatScreen__container'>
              <p className='chatScreen__text--user'>{message.message}</p>
          </div>
        )
      })} */}


      {/* {messages.map((message) => (
        message.name && message.name === personName ? (
        <di className='chatScreen__container'>
          <Avatar
          className='chatScreen__img'
          src={message?.image}
          alt={message?.name}
          />
          <p className='chatScreen__text'>{message.message}</p>

        </di>


          ):(
            <></>
          )

        )

        )} */}
      {/* {messages.map((message) =>
        message.name ? (

          <di className='chatScreen__container'>
          <Avatar
          className='chatScreen__img'
          src={message?.image}
          alt={message?.name}
          />
          <p className='chatScreen__text'>{message.message}</p>
        </di>
          ):(
            <di className='chatScreen__container'>
              <p className='chatScreen__text--user'>{message.message}</p>
            </di>
          )
      )} */}

        <form className="chatScreen__form">
          <input
          type="text"
          value={input}
          onChange={updateInput}
          className="chatScreen__input"
          placeholder='Type your message...'
          />

          <button onClick={handleSubmit} type="submit" className="chatScreen__button">
            send
          </button>
        </form>
    </div>
  )
}

export default ChatScreen
      // {messages.map((message) => {

      //   return(
      //       message.name?(
      //       message.name === personName && (
      //     <div key={message.name}>

      //     </div>
      //         )
      //   ):(<></>)
      //   )
      // })}
