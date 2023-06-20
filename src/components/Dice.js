import React, { useRef } from 'react';
import '../style/dice.css';

const Dice = () => {
    const diceRef = useRef(null);

    const randomDice = () => {
        const random = Math.floor(Math.random() * 10);

        if (random >= 1 && random <= 6) {
            rollDice(random);
        } else {
            randomDice();
        }
    };

    const rollDice = random => {
        const diceElement = diceRef.current;

        diceElement.style.animation = 'rolling 4s';

        setTimeout(() => {
            switch (random) {
                case 1:
                    diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    break;
                case 6:
                    diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
                    break;
                case 2:
                    diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                    break;
                case 5:
                    diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
                    break;
                case 3:
                    diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
                    break;
                case 4:
                    diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                    break;
                default:
                    break;
            }
            diceElement.style.animation = 'none';
        }, 4050);
    };

    return (
        <div>
            <div className="dice" ref={diceRef}>
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
                <div className="face right"></div>
                <div className="face left"></div>
            </div>
            <button className="button" onClick={randomDice}>
                Roll the Dice!
            </button>
        </div>
    );
};

export default Dice;
