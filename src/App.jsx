import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import ImagenCripto from "./img/imagen-criptos.png";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
`;

//Style componente siempre por fuera del componente
const Heading = styled.h1`
    font-family: "Rubik Iso", cursive;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    font-size: 34px;
`;

const Hr = styled.hr`
    width: 100%;
    height: 6px;
    background-color: aliceblue;
    display: block;
    box-sizing: border-box;
`;

const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin-top: 100px;
    display: block;
`;

const Respuesta = styled.div`
    width: 60%;
    margin: 0 auto;
    @media (max-width: 500px){
        width: 100%;
        
    }
`;

function App() {
    const [monedas, setMonedas] = useState({});
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (Object.keys(monedas).length > 0) {
            const cotizarCripto = async () => {
                setCargando(true)
                setResultado({})
                const { moneda, criptoMoneda } = monedas;
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                //Debido a que la llave de la API varia segun la cripto vamos usar [] para indicar que acceda a la propiedad segun la moneda y cripto que hayamos solicitado
                // setResultado(resultado.DISPLAY.BTC.USD.PRICE);//solo serviria con bitcoin
                console.log(resultado);
                setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
                console.log(resultado.DISPLAY[criptoMoneda][moneda]);
                setCargando(false)
            };
            cotizarCripto();
        }
    }, [monedas]);

    return (
        <>
            <Contenedor>
                <Imagen src={ImagenCripto} alt="Imagen Criptomonedas" />
                <div>
                    <Heading>COTIZA CRIPTOMONEDAS</Heading>
                    <Hr />
                    <Formulario setMonedas={setMonedas} />
                </div>
            </Contenedor>
            <Respuesta>
                {cargando && <Spinner/>}
                {resultado.PRICE && <Resultado resultado={resultado} />}
            </Respuesta>
        </>
    );
}

export default App;
