import React from "react";
import styled from "@emotion/styled";

const Result = styled.div`
    width: 100%;
    display: flex;
    gap: 13rem;
    margin-top: 1rem;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        width: 90%;
        max-width: 90%;
        flex-direction: column;
        gap: 1rem;
    }
`;

const Price = styled.p`
    font-size: 2rem;
    text-align: center;
    span {
        font-weight: 700;
        font-family: "Rubik Iso", cursive;
    }
`;
const Texto = styled.p`
    text-align: center;
`;

const Img = styled.img`
    display: block;
    max-width: 200px;
`;

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
        resultado;
    return (
        <Result>
                <Img
                    src={`https://www.cryptocompare.com/${IMAGEURL}`}
                    alt="Imagen Coin"></Img>
                <div>
                    <Price>
                        El precio es de: <span>{PRICE}</span>
                    </Price>
                    <Texto>El precio mas alto del día: {HIGHDAY}</Texto>
                    <Texto>El precio más bajo del día: {LOWDAY}</Texto>
                    <Texto>
                        Variación en las ultimas 24 horas: {CHANGEPCT24HOUR}
                    </Texto>
                    <Texto>Última actualización: {LASTUPDATE}</Texto>
                </div>
        </Result>
    );
};

export default Resultado;
