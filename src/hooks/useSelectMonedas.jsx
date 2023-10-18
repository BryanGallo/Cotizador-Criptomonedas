import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    border-radius: 1rem;  
    padding: 1rem;
    font-size: 18px;

`



//nuestros hook no tiene retuns como un componente
const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')

    //cuando a una funcion le cambiamos las {} por () indicamos que es un return de react y que imprimira algo en pantalla
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={e=>{
                setState(e.target.value)
            }}>
                <option value="">Seleccione</option>
                {opciones.map((opcion) => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ))}
            </Select>
        </>
    );

    return [state,SelectMonedas];
};

export default useSelectMonedas;
