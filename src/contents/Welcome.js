import React from "react";
import styled from "styled-components";
import back from "./../img/Prograss/earth.png"
const Welcome = ()=>{
    return(
        <Container  back={back}>
            <div className="back"></div>
            <MainText>
                <span>Welcome to 재근 world</span>
                <span>최재근의 세계에 오신 것을</span>
                <span>환영합니다.</span>
                <span>편안한 여행 되시길 바랍니다.</span>
            </MainText>
        </Container>
    )
}; export default Welcome;
const Container = styled.div`
width:100%;
height:100vh;
text-align:center;
font-weight:bold;
color:#fff;
position:relative;
    div.back{
        width:700px;
        height:700px;
        margin:0 auto;
        background:no-repeat center url(${props=>props.back});
        background-size:cover;

        position:absolute;
        top:25%;
        left:31.5%;

        animation: rotate 30s linear infinite;


    }
`;


const MainText = styled.div`
    background-color:rgba(90,40,190, 0.5);
    padding:1rem;
    font-size:50px;
    text-align:center;
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%);
    display:flex;
    flex-direction:column;
        span{
            padding-bottom:1rem;
        }
`;