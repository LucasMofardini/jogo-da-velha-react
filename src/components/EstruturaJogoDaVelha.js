import React, { useEffect, useState } from 'react';
import '../assets/css/JogoDaVelha.css';

export default function EstruturaJogoDaVelha() {
    const xis = 'x';
    const bolinha = 'o';
    const [jogadorAtivo, setJogadorAtivo] = useState(xis);
    const [sequencia, setSequencia] = useState([]);

    useEffect(() => {
        console.log(sequencia);

    });
    function logicaClick(event) {
        event.preventDefault();
        selecionarNoJogo(event);

    }
    function selecionarNoJogo(event) {
        /* Logica */
        /* Se nao tiver valor no target ele coloca valor */
        if (!event.target.value) {

            event.target.value = jogadorAtivo;
            event.target.innerText = jogadorAtivo;

            let ariaLabel = +event.target.ariaLabel;

            setSequencia([...sequencia,

            { jogadorAtivo, ariaLabel }

            ]);

            // console.log(sequencia);
            /* Depois muda o jogador */

            mudarOJogador(jogadorAtivo);
        }

    }
    function mudarOJogador(jogadorAtivo) {
        // console.log(jogadorAtivo);

        if (jogadorAtivo === xis) {
            setJogadorAtivo(bolinha);
        }
        if (jogadorAtivo === bolinha) {
            setJogadorAtivo(xis);
        }

    }
    return (
        <div className='container-all'>
            <div className='container-jogador'>
                <h2>Vez de jogar : </h2><span>{jogadorAtivo.toLocaleUpperCase()}</span>
            </div>
            <div className="container-body-jogo">
                <div className='container-jogo'>
                    <div className='linha-btn' id="linha-1">
                        <button onClick={logicaClick} value="" aria-label='1'> </button>
                        <button onClick={logicaClick} value="" aria-label='2'> </button>
                        <button onClick={logicaClick} value="" aria-label='3'> </button>
                    </div>
                    <div className='linha-btn' id="linha-2">
                        <button onClick={logicaClick} value="" aria-label='4'> </button>
                        <button onClick={logicaClick} value="" aria-label='5'> </button>
                        <button onClick={logicaClick} value="" aria-label='6'> </button>
                    </div>
                    <div className='linha-btn' id="linha-3">
                        <button onClick={logicaClick} value="" aria-label='7'> </button>
                        <button onClick={logicaClick} value="" aria-label='8'> </button>
                        <button onClick={logicaClick} value="" aria-label='9'> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}