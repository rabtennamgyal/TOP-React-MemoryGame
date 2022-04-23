import { useEffect } from 'react';
import utd from '../assets/manutd.png';
import city from '../assets/mancity.png';
import arsenal from '../assets/arsenal.png';
import liverpool from '../assets/liverpool.png';
import chelsea from '../assets/chelsea.png';
import psg from '../assets/paris.png';
import ajax from '../assets/ajax.png';
import juve from '../assets/juve.png';
import inter from '../assets/inter.png';
import madrid from '../assets/madrid.png';
import barca from '../assets/barca.png';
import munich from '../assets/munich.png';


function Cards(props) {
    const addingScore = props.addScore;
    const cards = document.querySelectorAll('.card');

    useEffect(() => {
        cards.forEach(el => {
            const random = Math.floor(Math.random() * 12)
            el.style.order = random
        })
    });

    return (
        <div className="cards">
            <div className="card">
                <img id='manutd' className='box' src={utd} alt='manutd' onClick={(e) => addingScore(e)} />
            </div>

            <div className='card'>
                <img id='mancity' className='box' src={city} alt='mancity' onClick={(e) => addingScore(e)} />
            </div>

            <div className='card'>
                <img id='chelsea' className='box' src={chelsea} alt='chelsea' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='arsenal' className='box' src={arsenal} alt='arsenal' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='liverpool' className='box' src={liverpool} alt='liverpool' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='munich' className='box' src={munich} alt='munich' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='inter' className='box' src={inter} alt='inter' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='juve' className='box' src={juve} alt='juve' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='madrid' className='box' src={madrid} alt='madrid' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='barca' className='box' src={barca} alt='barca' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='ajax' className='box' src={ajax} alt='ajax' onClick={(e) => addingScore(e)}/>
            </div>

            <div className='card'>
                <img id='psg' className='box' src={psg} alt='paris' onClick={(e) => addingScore(e)}/>
            </div>
        </div>
    );
};

export default Cards;