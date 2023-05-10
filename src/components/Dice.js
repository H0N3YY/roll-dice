import React from 'react';
import './style/dice.css';

const Dice = () => {
  return (
    <div className='dice_style'>
        <div className='face_front'></div>
        <div className='face_back'></div>
        <div className='face_top'></div>
        <div className='face_bottom'></div>
        <div className='face_right'></div>
        <div className='face_left'></div>
    </div>
  )
}

export default Dice
