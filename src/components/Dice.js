import React from 'react';
import '../style/dice.css';

const Dice = () => {
  return (
    <div className='dice'>
        <div className='face front'></div>
        <div className='face back'></div>
        <div className='face top'></div>
        <div className='face bottom'></div>
        <div className='face right'></div>
        <div className='face left'></div>
    </div>
  )
}

export default Dice
