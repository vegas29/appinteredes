import React,{Fragment, useState} from 'react';
import Formulario from './components/Formulario';



function App() {


  //State

  const [monto, guardarMonto] = useState('');

  return (
    <Fragment>
      <h1 className="text-center mt-5">Aplicación de divisas</h1>
      <Formulario
        guardarMonto={guardarMonto}
      />
    </Fragment>
    

  );
}

export default App;
