import styled, { css } from 'styled-components';
import { FiCheck , FiX } from "react-icons/fi";

const colores ={
    borde: "#85F4FF",
    error: "#E74646",
    exito: "#54B435"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 400;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`;

const GrupoInput = styled.label`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    font-family: 'Wix Madefor Display', sans-serif;

    &:focus{
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}

`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: red;
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}

`;

const IconoValidacion = styled(FiCheck)`
    position: absolute;
    right: 10px;
    bottom: 1px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}

    ${props => props.valido === 'false' && css`
        opacity: 0;
    `}

`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Boton = styled.button`
    height: 45px;
    width: 30%;
    border-radius: 2px;
    border: 2px solid transparent;
    background-color: #42C2FF;
    color: black;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    margin-top: 20px;
`;

const MensajeError = styled.p`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;

    p{
    margin: 0;
    }

    b{
    margin-left: 10px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;




export {Formulario,
        Label,
        GrupoInput,
        Input,
        LeyendaError,
        IconoValidacion,
        ContenedorBotonCentrado,
        Boton,
        MensajeExito,
        MensajeError};