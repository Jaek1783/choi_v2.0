import React from "react";
import styled from "styled-components";
import rocket from "./img/Prograss/rocket.png";
import earth from "./img/Prograss/earth.png";

const Prograss = (props)=>{
    return(
        <Container>
            <PrograssBar count={props.count}>
                <div></div>
                <span className="rocket"><img src={rocket} alt="프로그래스바 로켓이미지"/></span>
                <span className="earth"><img src={earth} alt="프로그래스바 지구" />도착!!</span>
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
span.rocket{
    display:${props=>props.count === 5 ? "none":"block"};
    img{
        width:100px;
        height:50px;
        margin-top:-1.2rem;
        margin-left:-1.2rem;
        
    }
}
span.earth{
    display:${props=>props.count === 5 ? "flex":"none"};
    flex-direction:column;
    text-align:center;
    color:#fff;
    img{
        width:80px;
        height:80px;
        margin-top:-1.5rem;
        margin-right:-1.5rem;
    }
}
`;