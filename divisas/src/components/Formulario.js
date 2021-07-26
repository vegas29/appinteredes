import React, { Fragment } from 'react';

const Formulario = () => {
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
                        <form id="forms">
                            <fieldset>
                                <div className="container container-md mt-5">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Monto</label>
                                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Monto" />
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

                                    <button className="btn btn-success d-block m-auto w-25">Convertir</button>
                                </div>
                            </fieldset>

                        </form>

                        <div className="jumbotron bg-light mt-5 p-5">
                            <p className="text-center">Mensaje aqui</p>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="historial" role="tabpanel" aria-labelledby="historial-tab">Hola soy el tab2</div>
                </div>

            </div>

        </Fragment>
    );
}

export default Formulario;