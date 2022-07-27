import React from "react";
import styled from "styled-components";
import rocket from "./img/Prograss/rocket.png";

const Prograss = (props)=>{
    return(
        <Container>
            <PrograssBar count={props.count}>
                <div></div>
                <img src={rocket} alt="프로그래스바 로켓이미지"/>
            </PrograssBar>
        </Container>
    )
}; export default Prograss;

const Container = styled.div`
width:100%;
padding:2rem 1rem;
position:fixed;
top:0;
left:0;
z-index:9999;
`;

const PrograssBar = styled.div`
width:98%;
height:10px;
background-color:#fff;
border-radius:15px;
display:flex;
div{
    width:${props=>(props.count*2)*10}%;
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