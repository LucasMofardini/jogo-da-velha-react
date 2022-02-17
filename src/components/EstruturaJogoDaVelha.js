import React, { useEffect, useState } from 'react';
import '../assets/css/JogoDaVelha.css';

export default function EstruturaJogoDaVelha() {
    const xis = 'x';
    const bolinha = 'o';
    //  
    const rodadaInicial = Array(9).fill("");
    const [jogadorAtivo, setJogadorAtivo] = useState(xis);
    const [vencedor, setJogadorVencedor] = useState();
    const [rodada, setRodada] = useState(rodadaInicial);


    useEffect(verificaGanhador, [rodada]);

    function logicaClick(index) {
        console.log(index);

        if (rodada[index] !== "") {
            return null;
        }
        if (vencedor) {
            return null;
        }
        setRodada(
            rodada.map((item, itemIndex) => {
                // return itemIndex === index ? jogadorAtivo : item
                if (itemIndex === index) {
                    // console.log(' item : ', index);
                    // console.log('item index : ', itemIndex);

                    return (jogadorAtivo);


                } else {
                    return (item);
                }
            })
        );


        /* Depois muda o jogador */
        mudarOJogador();


    }
    function verificaGanhador() {
        // 8 maneiras de um jogador vencer
        const arrayFormasDeVencer = [
            //Linhas
            [rodada[0], rodada[1], rodada[2]],
            [rodada[3], rodada[4], rodada[5]],
            [rodada[6], rodada[7], rodada[8]],
            //Verticais
            [rodada[0], rodada[3], rodada[6]],
            [rodada[1], rodada[4], rodada[7]],
            [rodada[2], rodada[5], rodada[6]],
            //Diagonais
            [rodada[0], rodada[4], rodada[8]],
            [rodada[2], rodada[4], rodada[6]],
        ];

        arrayFormasDeVencer.forEach((formasDeVencer) => {
            if (formasDeVencer.every(forma => forma === bolinha)) {
                setJogadorVencedor(bolinha);
            }
            if (formasDeVencer.every(forma => forma === xis)) {
                setJogadorVencedor(xis);

            }
        });
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
        setJogadorVencedor();
    }
    return (

        <div className='container-all'>

            <div className='container-jogador'>
                <h2>
                    {vencedor ? `O Vencedor é : ` : 'Vez de jogar :'}
                </h2>
                <span> {vencedor ? vencedor.toLocaleUpperCase() : jogadorAtivo.toLocaleUpperCase()}</span>

                <div className="container-botao-resetar">
                    {vencedor ? <button onClick={resetarOJogo}> Resetar Partida </button> : ""}
                </div>
            </div>

            <div className="container-body-jogo">
                <div className={`container-jogo ${vencedor ? "game-over" : ""} `}>

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


            </div>
            <footer><a target="_blank" href="https://github.com/lucasmofardini">@lucasmofardini</a></footer>

        </div >
    );
}