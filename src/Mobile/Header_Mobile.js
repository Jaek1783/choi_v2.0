import React from "react";
import styled from "styled-components";
const Header = (props)=>{
    return(
        <Container>
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
                }}>1</div>
                <div onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }                    
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 2);
                    }
                }}>2</div>
                <div onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 3);
                    }
                }}>3</div>
                <div  onClick={()=>{
                    if(props.numRef.current ===0){
                        alert("먼저 들어가기를 클릭해 주세요");
                    }
                    if(props.numRef.current !== 0){
                        props.setCount(props.numRef.current = 4);
                    }
                }}>4</div>
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
            justify-content : space-between;
            div{
                text-align:center;
                width:17vw;
                padding:0 1rem;
                cursor:pointer;
                font-size:.9rem;
            }
        }
`;