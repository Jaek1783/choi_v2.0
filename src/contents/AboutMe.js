import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Me from './../img/AboutME/me.jpg'

const AboutMe = (props)=>{
        const isPc = useMediaQuery({
            query:"(min-width:1020px)"
        });
    return(
        <Container numRef = {props.numRef}>
            <Contents isPc={isPc}>
                <div className="me"><img src={Me} alt="나의 이미지"/></div>
                <Text isPc={isPc}>
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
    height:80vh;
    margin:20vh 0 0;
    transition: 1s ease-in-out;
`;
const Contents = styled.div`
    background-color: rgba(90, 40, 190, 0.9);
    width:100vw;
    height:${props=>props.isPc ? "30rem":"25rem"};
    padding:${props=>props.isPc ? "2rem":"2rem 1rem"};
    display:flex;
    justify-content:space-evenly;
    color:#fff;
    position:relative;
        div.me{
            width:${props=>props.isPc ? "20rem":"13rem"};
        }
`;
const Text = styled.div`
        display:flex;
        flex-direction: column;
        font-size:${props=>props.isPc ? "20px":"13px"};
        font-weight:bold;
        line-height:${props=>props.isPc ? "3rem":"2rem"};
`;