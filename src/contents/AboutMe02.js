import React from "react";
import styled from "styled-components";
import back from "./../img/back02.jpg";

const AboutMe02 = ()=>{
    return(
        <Container back={back}>
            <div>
                <span>저는 비전공자에 고졸입니다.</span>
                <span>저보다 학력좋고 저보다 좋은 기술을 가진 많은 사람도 있습니다.</span>
                <span>하지만 저는 자신있게 말씀드리고 싶습니다.</span>
                <span>저는 성장하는 사람이며, 노력하는 사람입니다.</span>
                <span>저는 즐기는 사람이며, 나아가는 사람입니다.</span>
                <span>고졸딱지가 발목을 붙잡는다 생각하여 방송통신대학교에 진학하였습니다.</span>
                <span>비 전공자지만 개발자로 성공하기 위해 꾸준히 학습하고, 꾸준히 성장하고 있습니다.</span>
                <span>저는 열심히 살았고, 당당히 살았고, 어디에서든 성실하고 일 잘하는 이미지로 있었습니다.</span>
                <span>저는 물류원으로 인정받았고, 사무원으로 인정받았습니다.</span>
                <span>이제는 개발자로 인정받고 싶어 도전합니다.</span>
                <span>저는 꿈이 생겼고, 목표가 생겨 개발자의 직무에 고개를 돌렸습니다.</span>
                <span>신입에 가르침 받아야 할 것이 많이 있지만 열심히 하겠습니다.</span>
                <span>최선을 다하겠습니다. 반드시 함께 성장하는 개발자가 되겠습니다.</span>
                <span>잘부탁드립니다.</span>
            </div>
        </Container>
    )
}; export default AboutMe02;
const Container = styled.div`
    width:100vw;
    height:100vh;
    background:no-repeat center url(${props=>props.back});
    background-size:cover;
    color:#fff;
    font-size:1.2rem;
    font-weight:bold;
    padding:7%;
        div{
            width:70%;
            margin:0 auto;
            padding:1rem;
            background-color:rgba(0,0,0,0.5);
            display:flex;
            flex-direction:column;
            span{
                padding-bottom:1rem;
            }
        }
`;