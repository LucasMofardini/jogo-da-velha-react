import React, { useEffect, useState } from 'react';
import '../assets/css/JogoDaVelha.css';

export default function EstruturaJogoDaVelha() {
    const xis = 'x';
    const bolinha = 'o';
    //  
    const rodadaInicial = Array(9).fill("");
    const [jogadorAtivo, setJogadorAtivo] = useState(xis);
    const [rodada, setRodada] = useState(rodadaInicial);


    useEffect(() => {
        console.log(rodada)
    })

    function logicaClick(event, index) {
        console.log(event);

        setRodada(
            rodada.map((item, itemIndex, key) => {
                console.log(' item : ', index);
                console.log('item index : ', itemIndex);
                console.log('key ', key)
                // return itemIndex === index ? jogadorAtivo : item
                if (itemIndex === index) {

                    // ele so pode setar se o jogador nao for o mesmo
                    return (jogadorAtivo);

                } else {
                    return (item);
                }
            })
        );


        /* Depois muda o jogador */
        mudarOJogador();


    }

    function mudarOJogador() {
        // console.log(jogadorAtivo);

        if (jogadorAtivo === xis) {
            setJogadorAtivo(bolinha);
        }
        if (jogadorAtivo === bolinha) {
            setJogadorAtivo(xis);
        }

    }
    function resetarOJogo() {
        setRodada(rodadaInicial);
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
                    <div className='linha-btn'>
                        {
                            rodada.map((item, index) => {
                                return (
                                    <button
                                        className={`${item} ${index}`}
                                        onClick={() => {
                                            logicaClick(index)
                                        }}
                                        key={index}>
                                        {item}
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>

                <button onClick={resetarOJogo}> Resetar </button>

            </div>

        </div >

    );
}