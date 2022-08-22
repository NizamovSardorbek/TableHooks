import styled from "styled-components";


export const Block = styled.div`
    
    /* background-color: red; */
    display: grid;
    width: 60%;
    height: 400px;
    border: 1px solid black;
    margin: 50px auto;
    grid-template-rows: 50px 1fr;
    >div{
        border: 1px solid red ;
    }
`