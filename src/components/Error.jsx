import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
    padding: 1rem;
    background-color: red;
    color: white;
    border-radius: 30px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
`

const Error = ({children}) => {
    return (
        <>
            <Texto>{children}</Texto>
        </>
    );
};

export default Error;
