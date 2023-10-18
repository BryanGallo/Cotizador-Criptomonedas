import React, { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas.js";
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 1rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 2rem;
    font-family: "Rubik Iso", cursive;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`;

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState('');

    const [moneda, SelectMonedas] = useSelectMonedas(
        "Elige tu Moneda",
        monedas
    );
    const [criptoMoneda, SelectCriptomoneda] = useSelectMonedas(
        "Elige tu Cripto",
        criptos
    );

    useEffect(() => {
        const consultarApi = async () => {
            const url =
                "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map((cripto) => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                };
                return objeto;
            });
            setCriptos(arrayCriptos);
        };
        consultarApi();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (moneda === "") {
            setError( "No has escogido tu tipo de moneda");
            return;
        }
        if (criptoMoneda === "") {
            setError( "No has escogido tu Criptomoneda");
            return;
        }

        setError('')

        setMonedas({
            moneda,
            criptoMoneda
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="COTIZAR" />
            </form>
            {error && <Error children={error}/> }
            
        </>
    );
};

export default Formulario;
