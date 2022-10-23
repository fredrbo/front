import { Number } from "../../components/Number";
import { Text } from "../../components/Text";

export function Main() {
    return (
        <>
            <div className="mt-3">
                <div>
                    <Text description="Resultado" color='#0066b3' fontWeight='normal' fontSize='40px' />
                    <Text description="Concurso 1411 (01/08/2012)" color='#776d7b' fontSize='25px' margin='17px 0px 0px 15px' />
                </div>
            </div>
            <hr className='w-50'></hr>

            <div className='mt-4'>
                <Text description="Sorteio realizado no Caminhão da Sorte em GUANAMBI, BA" color='#777584' fontSize='20px' />
            </div>

            <div className=' my-4'>
                <Number number='08' />
                <Number number='12' />
                <Number number='30' />
                <Number number='20' />
                <Number number='19' />
                <Number number='29' />
            </div>

            <div className='row mt-3'>
                <div className='col-2'>
                    <Text description="Estimativa de prêmio do próxmo concurso 23/10/2000" fontSize='17px' />
                </div>
                <div className='col-2 '>
                    <Text description="R$ 3.000.000" fontSize='35px' color="#344673" fontWeight="bold" />
                </div>
            </div>
        </>
    )
}