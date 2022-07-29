import React from "react";
import styled from "styled-components";
import Me from './../../img/AboutME/me.jpg'

const AboutMe = (props)=>{
    return(
        <Container numRef = {props.numRef}>
            <Contents>
                <div className="me"><img src={Me} alt="나의 이미지"/></div>
                <Text>
                    <span>안녕하세요</span>
                    <span>신입 개발자 최재근입니다.</span>
                    <span>제 닉네임은 지렁이형입니다.</span> 
                    <span>다른 사람의 시선보다</span> 
                    <span>꿈을 향해 꿈틀대는 개발자로 성장하고 싶어</span> 
                    <span>지렁이형이라고 지었습니다.</span> 
                    <span>잘 부탁 드립니다.</span>
                </Text>
            </Contents>
        </Container>
    )
}; export default AboutMe;

const Container = styled.div`
    width:100%;
    height:100vh;
    padding-top:10rem;
    transition: 1s ease-in-out;
`;
const Contents = styled.div`
background-color: rgba(90, 40, 190, 0.9);
    margin:0 auto;
    padding:2rem;
    display:flex;
    justify-content:space-evenly;
    color:#fff;
    position:relative;
        div.me{
            width:40%;
        }
`;
const Text = styled.div`
        display:flex;
        flex-direction: column;
        font-size:20px;
        font-weight:bold;
        line-height:3rem;
`;