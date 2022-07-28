import React from "react";
import styled from "styled-components";
import rocket from "./img/Prograss/rocket.png";
import earth from "./img/Prograss/earth.png";
import { useMediaQuery } from "react-responsive";
const Prograss = (props)=>{
    const isPc = useMediaQuery({
        query:"(min-width:1020px)"
    });
    return(
        <Container>
            <PrograssBar count={props.count} isPc={isPc}>
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
        width:${props=>props.isPc ? "100px": "50px"};
        transition: 1s ease-in-out;
        height:${props=>props.isPc ? "50px": "30px"};
        margin-top:${props=>props.isPc ? "-1.2rem": "-.6rem"};
        margin-left:-1.2rem;
        
    }
}
span.earth{
    display:${props=>props.count === 5 ? "flex":"none"};
    flex-direction:column;
    text-align:center;
    color:#fff;
    img{
        width:${props=>props.isPc ? "80px": "50px"};
        height:80px;
        margin-top:-1.5rem;
        margin-right:-1.5rem;
    }
    font-size:${props=>props.isPc ? "1rem": ".5rem"};
}
`;