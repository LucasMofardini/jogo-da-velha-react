import React from 'react';
import '../assets/css/JogoDaVelha.css';

export default function EstruturaJogoDaVelha() {

    return (
        <div class="container-body">
            <div className='container-jogo'>
                <div className='linha-btn' id="linha-1">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className='linha-btn' id="linha-2">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className='linha-btn' id="linha-3">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    );
}