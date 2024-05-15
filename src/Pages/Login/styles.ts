import styled from "styled-components";


export const Container = styled.main`

    width:100%;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
`

export const Wrapper = styled.div`
        width:100%;
        max-width:450px;
        background-color:white;
        border-radius:10px;
        padding:20px;


        flex:1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
`

export const Column = styled.div`
        width:100%;
        display:flex;
        flex-direction:column;
        aling-items:flex-start;
        justify-content:center;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const TitleLogin = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
`