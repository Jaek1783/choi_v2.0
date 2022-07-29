import React from "react";
import styled from "styled-components";
import up from "./img/icon/up.png";
import down from "./img/icon/down.png";

const MainButton = (props)=>{
    const page = 5;
    return(
        <Container numRef = {props.numRef}>
            <Page>{props.numRef.current+" / "+page}</Page>
            <div onClick={()=>{
                if(props.numRef.current > 0){
                    props.setCount(props.numRef.current -= 1);
                }
            }}><img src={up} alt="up 이미지" /></div>
            <div onClick={()=>{
                if(props.numRef.current < page){
                    props.setCount(props.numRef.current += 1);
                }
            }}><img src={down} alt="down 이미지" /></div>
        </Container>
    )
}; export default MainButton;

const Container = styled.div`
    z-index:999999;
    position:fixed;
    right:5%;
    top:30%;
    display:flex;
    flex-direction:column;
    transition:.5s ease-in-out;
    text-align:center;
    margin:0 auto;
    opacity:${props=>props.numRef.current === 0 ? "0":"1"};
    img{
        width:25px;
        margin:0 auto;
    }
`;
const Page = styled.div`

color:#fff;
font-size:25px;
`;