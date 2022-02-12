import React, { useEffect, useState } from 'react';
import '../assets/css/JogoDaVelha.css';

export default function EstruturaJogoDaVelha() {
    const xis = 'x';
    const bolinha = 'o';
    const [jogadorAtivo, setJogadorAtivo] = useState(xis);
    const [rodada, setRodada] = useState([]);

    useEffect(() => {


        console.log(rodada);



    });

    function logicaClick(event) {
        event.preventDefault();
        selecionarNoJogo(event);

    }
    function selecionarNoJogo(event) {
        /* A função precisa : 
            - Setar a o click na rodada,
            - Atualizar a rodada,
            - Mudar o jogador,
        */
        /* Toda vez que voce clica, ele PEGA o Aria-Label e pega o Jogador ativo. 
        Eu preciso fazer > Depois de clicado ele Seta A rodada e vai colocar o aria-label e jogador ativo no seu lugar  */
        let ariaLabel = +event.target.ariaLabel;

        setRodada([
            ...rodada,
            { jogadorAtivo, ariaLabel }
        ]);
        atualizaRodada(rodada);

        /* Depois muda o jogador */

        mudarOJogador(jogadorAtivo);


    }
    function atualizaRodada(rodada) {
        // event.target.value = jogadorAtivo;
        // event.target.innerText = jogadorAtivo;

        // Precisa pegar a rodada e atualizar nos btn


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
    function resetarOJogo() {
        setRodada([]);
        atualizaRodada();
    }
    return (
        <div className='container-all'>
            <div className='container-jogador'>
                <h2>
                    Vez de jogar :
                </h2>
                <span>{jogadorAtivo.toLocaleUpperCase()}</span>

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
                <button onClick={resetarOJogo}> Resetar </button>

            </div>

        </div >

    );
}