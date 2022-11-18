import { Number } from "../../components/Number";
import { Body } from "../../components/Body";
import { Text } from "../../components/Text";
import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import service from "../../services/sorteio";
import { SorteioProps } from "../../types/index";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../styles/theme";
import { Title } from "../../components/Title";

export function Main() {
    const [sorteio, setSorteio] = useState();
    const [dataApuracao, setDataApuracao] = useState('');
    const [dataProximoConcurso, setProximoConcurso] = useState('');
    const [listaDezenas, setlistaDezenas] = useState(['']);
    const [localSorteio, setLocalSorteio] = useState('');
    const [nomeMunicipioUFSorteio, setNomeMunicipioUFSorteio] = useState('');
    const [numero, setNumero] = useState(0);
    const [valorEstimadoProximoConcurso, setValorEstimadoProximoConcurso] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Temas
    const [tema, setTema] = useState(dark);

    function setInfo(sorteio: SorteioProps) {
        setDataApuracao(sorteio.dataApuracao)
        setProximoConcurso(sorteio.dataProximoConcurso)
        setlistaDezenas(sorteio.listaDezenas)
        setLocalSorteio(sorteio.localSorteio)
        setNomeMunicipioUFSorteio(sorteio.nomeMunicipioUFSorteio)
        setNumero(sorteio.numero)
        setValorEstimadoProximoConcurso(sorteio.valorEstimadoProximoConcurso)
        setTema(parseInt(sorteio.listaDezenas[0]) %2 === 0 ? light: dark )
    }

    const list = async () => {
        let number = random(1, 2529)
        const response: any = await service.list(number.toString());
        if (!response.error) {
            setSorteio(response);
            setInfo(response);
            setIsLoading(false)
        }
    };



    useEffect(() => { list() }, []);

    function random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <ThemeProvider theme={tema} >
                <Body>
                {isLoading && (
                    <div className="mt-4">
                        <Text description="Carregando..." color="#0066b3" fontSize="60px" fontWeight="700" />
                    </div>
                )}
                {!isLoading && (

                    <div>
                        <div className="mt-3">
                            <div>
                                <Title description="Resultado"  fontWeight='normal' fontSize='40px' />
                                <Text description={`Concurso ${numero} (${dataApuracao})`} color='#776d7b' fontSize='25px' margin='17px 0px 0px 15px' />
                            </div>
                        </div>
                        <hr className='w-75'></hr>

                        <div className='mt-4'>
                            <Text description={`Sorteio realizado no ${localSorteio} em ${nomeMunicipioUFSorteio}`} color='#777584' fontSize='20px' />
                        </div>

                        <div className=' my-4'>
                            <Number number={listaDezenas[0]} />
                            <Number number={listaDezenas[1]} />
                            <Number number={listaDezenas[2]} />
                            <Number number={listaDezenas[3]} />
                            <Number number={listaDezenas[4]} />
                            <Number number={listaDezenas[5]} />
                        </div>

                        <div className='row mt-3'>
                            <div className='col-4 mt-3'>
                                <Text description={`Estimativa de prêmio do próximo concurso ${dataProximoConcurso}`} fontSize='17px' />
                            </div>
                            <div className='col-5 mt-3'>
                                <Text description={`R$ ${valorEstimadoProximoConcurso},00`} fontSize='35px' color="#344673" fontWeight="bold" />
                            </div>
                        </div>

                    </div>

                )}</Body>
            </ThemeProvider>
        </>
    )
}