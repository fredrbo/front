import React from 'react';
import './App.css';
import { Text } from './components/Text/';

function App() {
  return (
    <>
      <div className="mt-3">
        <div>
          <Text description="Resultado" color='#0066b3' fontWeight='normal' fontSize='40px' />
          <Text description="Concurso 1411 (01/08/2012)" color='#776d7b' fontSize='25px' margin='17px 0px 0px 15px' />
        </div>
      </div>
      <hr className='w-50'></hr>
      <div className=' mt-1'>
        <Text description="Sorteio realizado no Caminhão da Sorte em GUANAMBI, BA" color='#777584' fontSize='20px' />
      </div>

      <div className=' mt-3'>
        Resultado 10, 40 ro 02
      </div>

      <div className=' mt-3 '>
        <div className='col-4 '>
          <Text description="Estimativa de prêmio do próxmo concurso DATA" fontSize='20px' />
          dinheiro
        </div>
      </div>
    </>
  );
}

export default App;
