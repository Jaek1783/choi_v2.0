import './App.css';
import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import back from './img/back01.jpg';

import Prograss from './Prograss';

function App() {
  const time = useRef(null);
  const BoxRef = useRef(null);

  setInterval(()=>{
    let today = new Date();
    let hour = today.getHours(); // 시
    let min = today.getMinutes();  // 분
    let sec = today.getSeconds();  // 초
    time.current.innerHTML = `${hour<10 ? `0${hour}`:hour}:${min<10 ? `0${min}`:min}:${sec<10 ? `0${sec}`:sec}`
  },1000);

const start = ()=>{
  BoxRef.current.style.opacity = 0;
}

//스크롤값 구하기
const useScroll = ()=>{

  // useState를 통해 x변수와 y변수 생성
  
      const [state, setState] = useState({ x:0, y:0 });
  
  //     스크롤을 내리면 window.scrollY값을 y값에 대입
      const onScroll = (e)=>{
               setState({ y : window.scrollY });
      }
  
      
       useEffect(()=>{
               
              window.addEventListener("scroll", onScroll);
           
              return()=>window.removeEventListener('scroll',onScroll);
       },[]);
  
      return state;
  
  }
  const { y } = useScroll();
  console.log(y);
  // 코드
  return (
    <Background back={back} className="App">
      <Prograss/>
      <MainContainer ref={BoxRef}>
      <Time ref={time}></Time>
      <MainText>
        <div>Hello, world</div>
        <div>최재근의 세계로 초대합니다</div>
      </MainText>
      <button  onClick={()=>{
        start();
      }}>들어가기</button>
      </MainContainer>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width:100%;
  height:100vh;
  background:center url(${props=>props.back});
  background-repeat:no-repeat;
  background-size:cover;
  overflow:hidden;
`;
const MainContainer = styled.div`
text-align:center;
position:absolute;
top:35%;
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