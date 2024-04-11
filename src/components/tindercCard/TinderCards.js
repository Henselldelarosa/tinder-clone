import React, { useEffect, useState } from 'react'
import './TinderCards.scss'
import TinderCard from 'react-tinder-card'
import {db} from '../../config'
import {getFirestore, addDoc, collection, getDocs, onSnapshot, query} from "firebase/firestore"

// const
const TinderCards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const getCol = collection(db, 'people')
    const queryCol = query(getCol)

    const update = onSnapshot(queryCol, (snapshot) => {
      const peoples = []

      snapshot.forEach((doc) => {
        peoples.push(doc.data())
      })
      setPeople(peoples)
    })

    return () => {
      // this is to clean up
      update()
    }
  },[])







  return (
    <div className='tinderCard'>
      <div className="tinderCard__cardContainer">

      {people.map((person) => (
        <TinderCard
        className='tinderCard__card'
        preventSwipe={['up', 'down']}
        key={person?.name}
        >
          <div
          className="tinderCard__card--img"
          style={{backgroundImage:`url(${person?.url})`}}
          >
            <h3 className="tinderCard__card--name">{person?.name}</h3>
          </div>
        </TinderCard>
    ))}
    </div>
    </div>
  )
}

export default TinderCards
