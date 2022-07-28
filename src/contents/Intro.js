import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';


const Intro = (props)=> {
  const time = useRef(null);
  const BoxRef = useRef(null);

//시계 만들기
useEffect(()=>{
  setInterval(()=>{
    let today = new Date();
    let hour = today.getHours(); // 시
    let min = today.getMinutes();  // 분
    let sec = today.getSeconds();  // 초
    time.current.innerHTML = `${hour<10 ? `0${hour}`:hour}:${min<10 ? `0${min}`:min}:${sec<10 ? `0${sec}`:sec}`
  },1000);
},[]);

const start = ()=>{
  props.setCount(props.numRef.current += 1);
}

  // 코드
  return (
    <Container>
      <Contents ref={BoxRef}>
        <Time ref={time}></Time>
        <MainText>
          <div>Hello, world</div>
          <div>최재근의 세계로 초대합니다</div>
        </MainText>
        <button  onClick={()=>{
          start();
        }}>들어가기</button>
      </Contents>
    </Container>
  );
}

export default Intro;
const Container = styled.div`
  width:100%;
  height:100vh;
`;
const Contents = styled.div`
text-align:center;
position:absolute;
top:10%;
left:50%;
transform:translate(-50%);
font-weight:bold;
color:#fff;
transition: 1s ease-in-out;
  button{
    margin-top:10px;
    font-weight:bold;
    padding:20px 30px;
    background-color:#fff;
    border:2px solid #fff;
    border-radius:20px;
    cursor:pointer;
  }
`;
const Time = styled.div`
width:380px;
font-size:100px;
margin:0 auto;
`;
const MainText = styled.div`
  font-size:50px;
  text-align:center;
`;