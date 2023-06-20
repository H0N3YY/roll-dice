import React from 'react';
import '../style/dice.css';

const Dice = () => {

    const randomDice = () => {

        const random = Math.floor(Math.random() * 10);

        if (random >= 1 && random <= 6) {
            rollDice(random);
        }
        else {
            randomDice();
        }
    }
    const rollDice = random => {

        Dice.style.animation = 'rolling 4s';

        setTimeout(() => {

            switch (random) {
                case 1:
                    Dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    break;

                case 6:
                    Dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                    break;

                case 2:
                    Dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                    break;

                case 5:
                    Dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                    break;

                case 3:
                    Dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                    break;

                case 4:
                    Dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                    break;

                default:
                    break;
            }
            Dice.style.animation = 'none';

        }, 4050);

    }
    return (
        <div className='dice'>
            <div className='face front'></div>
            <div className='face back'></div>
            <div className='face top'></div>
            <div className='face bottom'></div>
            <div className='face right'></div>
            <div className='face left'></div>

            <button onClick={randomDice}></button>
        </div>
    )
}

export default Dice;
