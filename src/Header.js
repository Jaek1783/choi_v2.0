import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
const Header = (props)=>{
    const isPc = useMediaQuery({
        query:"(min-width:1020px)"
    });
    return(
        <Container isPc={isPc}>
            <div className="Nav">
                <div  onClick={()=>{
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 0);
                    }
                }}>Intro</div>
                <div onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 1);
                    }
                }}>About ME</div>
                <div onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }                    
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 2);
                    }
                }}>지원동기</div>
                <div onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 3);
                    }
                }}>Portfolio</div>
                <div  onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 4);
                    }
                }}>Contect</div>
                <div  onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 5);
                    }
                }}>Outro</div>
            </div>
        </Container>
    )
}; export default Header;
const Container = styled.div`
    padding-top:50px;
    z-index:99999;
    position:fixed;
    top:2%;
    left:0;
    color:#fff;
        div.Nav{
            display:flex;
            div{
                text-align:left;
                width:18vw;
                padding:${props=>props.isPc ? "0 5vw": "0 1vw"};
                cursor:pointer;
                font-size:${props=>props.isPc ? "1rem": ".9rem"};
            }
        }
`;