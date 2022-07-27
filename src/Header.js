import React from "react";
import styled from "styled-components";

const Header = (props)=>{
    return(
        <Container>
            <div className="Nav">
                <div onClick={()=>{
                    props.setCount(props.numRef.current = 0);
                }}>Intro</div>
                <div onClick={()=>{
                    props.setCount(props.numRef.current = 1);
                }}>About ME</div>
                <div onClick={()=>{
                    props.setCount(props.numRef.current = 2);
                }}>지원동기</div>
                <div onClick={()=>{
                    props.setCount(props.numRef.current = 3);
                }}>Portfolio</div>
                <div ></div>
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