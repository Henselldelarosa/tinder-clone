import React, { useEffect, useState } from 'react'
import './TinderCards.scss'
import TinderCard from 'react-tinder-card'
import {db} from '../../config'
import {getFirestore, addDoc, collection, getDocs, onSnapshot, query} from "firebase/firestore"

// const
const TinderCards = () => {
  const [people, setPeople] = useState([])




  // console.log(getCol)

  // fireStore Realtime update

  useEffect(() => {
    const getCol = collection(db, 'people')
    const queryCol = query(getCol)

    const update = onSnapshot(queryCol, (snapshot) => {
      const peoples = []

      snapshot.forEach((doc) => {
        console.log(doc.data())
        peoples.push(doc.data())
      })
      setPeople(peoples)
    })

    return () => {
      // this is to clean up
      update()
    }
  },[])
  // {
  //   name:'steve jobs',
  //   url: 'img/stevejobs.jpg'
  // },
  // {
  //   name:'mark Zuckerberg',
  //   url: 'img/mark-zuckerberg.jpg'
  // },

  // const db = getFirestore()


  // const fetchData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "people"))
  //   const temporaryArr =[]
  //   querySnapshot.forEach((doc) => {
  //     onSnapshot(getDoc(doc.data()))
  //     temporaryArr.push(doc.data())

  //   })
  //   setPeople(temporaryArr)
  // }






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
