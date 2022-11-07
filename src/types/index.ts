export interface Error { error: string }

export interface SorteioProps {
    acumulado: boolean,
    dataApuracao: string,
    dataProximoConcurso: string,
    dezenasSorteadasOrdemSorteio: string[],
    localSorteio: string,
    nomeMunicipioUFSorteio: string,
    numero: number,
    valorEstimadoProximoConcurso: number
}