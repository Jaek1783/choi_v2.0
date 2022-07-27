import React from "react";
import styled from "styled-components";
import rocket from "./img/rocket.png";

const Prograss = ()=>{
    return(
        <Container>
                <div></div>
                <img src={rocket} alt="프로그래스바 로켓이미지"/>
        </Container>
    )
}; export default Prograss;

const Container = styled.div`
    margin:2rem 1rem;
    width:98%;
    height:10px;
    background-color:#fff;
    border-radius:15px;
    display:flex;
    div{
        width:10%;
        height:10px;
        background-color:#8a2be2;
        border-radius:15px;
        transition: 1s ease-in-out;
    }
    img{
        width:100px;
        height:50px;
        margin-top:-1.2rem;
        margin-left:-1.2rem;
    }
`;

const PrograssBar = styled.div`

`;