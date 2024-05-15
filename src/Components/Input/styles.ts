import styled from "styled-components";

export const InputContainer = styled.div`
        width:100%;
        height:42px;
        color:#FFF;

        padding:0 10px;
        border:1px solid #81259D;
        border-radius:21px;
        overflow:hidden;


        & input{
            width:100%;
            height:42px;
            border-radius:21px;
            background:transparent;
            border:0;
            outline:none;
        }
`


export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`