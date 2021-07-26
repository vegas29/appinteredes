import React, { Fragment, useState } from 'react';
import Error from './Error';

const Formulario = ({guardarMonto}) => {

    //State de la app

    const [cantidad, guardarCantidad] = useState("");
    const [error, guardarError] = useState(false);
    const buscarConversion = e =>{
        e.preventDefault();

        //Validar la entrada del mondo
        if(cantidad.trim()=== '' || cantidad < 0 || isNaN(cantidad)){
            guardarError(true)
            return;
        }

        guardarError(false);

        //Enviar el monto
        guardarMonto(cantidad);
    }
    return (
        <Fragment>
            <div className="container container-sm">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-muted" id="conversion-tab" data-bs-toggle="tab" data-bs-target="#conversion" type="button" role="tab" aria-controls="conversion" aria-selected="true">Conversion</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-muted" id="historial-tab" data-bs-toggle="tab" data-bs-target="#historial" type="button" role="tab" aria-controls="historial" aria-selected="false">Historial</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="conversion" role="tabpanel" aria-labelledby="conversion-tab">
                        <form
                            onSubmit={buscarConversion}
                            id="forms">
                            <fieldset>
                                <div className="container container-md mt-5">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Monto</label>
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Monto"
                                            onChange={e => guardarCantidad(e.target.value)}
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Moneda Origen</label>
                                        <select class="form-control" id="exampleFormControlInput1" placeholder="Monto">
                                            <option value="BTC" selected>Bitcoin BTC</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Moneda Objetivo</label>
                                        <select class="form-control" id="exampleFormControlInput1" placeholder="Monto">
                                            <option value="BTC" selected>Colombian (COP)</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <input 
                                        type="submit"
                                        className="btn btn-success d-block m-auto w-25"
                                        value="Convertir" />
                                </div>
                            </fieldset>
                            {error ? <Error mensaje="Agrega un monto valido, por favor"/> : null}
                        </form>

                        <div className="jumbotron bg-light mt-5 p-5">
                            <p className="text-center">Mensaje aqui</p>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="historial" role="tabpanel" aria-labelledby="historial-tab">
                        <p className="mt-5">Fecha de la consulta: <span>26/07/2021</span></p>
                        <div className="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-secondary" scope="col">Nombre</th>
                                        <th className="bg-secondary" scope="col">Abreviatura</th>
                                        <th className="bg-secondary" scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default Formulario;