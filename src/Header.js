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
                <div >Contect</div>
            </div>
        </Container>
    )
}; export default Header;
const Container = styled.div`
    padding-top:50px;
    z-index:99999;
    position:fixed;
    top:0;
    left:0;
    color:#fff;
        div.Nav{
            display:flex;
            div{
                text-align:left;
                width:20vw;
                padding:0 5vw;
                cursor:pointer;
            }
        }
`;