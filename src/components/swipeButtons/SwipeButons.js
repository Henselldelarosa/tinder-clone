import React from 'react'
import './SwipeButons.scss'
import {
  FavoriteIcon,
  FlashOnIcon,
  CloseIcon,
  StarRateIcon,
  ReplayIcon,
  IButton
} from '../../exports'

const SwipeButons = () => {
  return (
    <div className='swipeButtons'>
      <IButton className='swipeButtons__replay'>
        <ReplayIcon fontSize='large'/>
      </IButton>

      <IButton className='swipeButtons__close'>
        <CloseIcon fontSize='large'/>
      </IButton>

      <IButton className='swipeButtons__star'>
        <StarRateIcon fontSize='large'/>
      </IButton>

      <IButton className='swipeButtons__favorite'>
        <FavoriteIcon fontSize='large'/>
      </IButton>

      <IButton className='swipeButtons__flash'>
        <FlashOnIcon fontSize='large'/>
      </IButton>

    </div>
  )
}

export default SwipeButons
