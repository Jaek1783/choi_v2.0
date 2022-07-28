import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import back from "./../img/back05.jpg"
import frame02 from "./../img/Intro/frame02.png";

const Intro = (props)=> {
  const time = useRef(null);
  const BoxRef = useRef(null);
  const timeRef = useRef(200);
  const [timer, setTimer] = useState(timeRef.current);
  const isMobile = useMediaQuery({
    query:"(max-width:750px)"
});
//시계 만들기
useEffect(()=>{
  setInterval(()=>{
    let min = "";
    let sec = "";
    min = parseInt(timeRef.current/60);
    sec = timeRef.current%60;
    time.current.innerHTML = `00:${min<10 ? `0${min}`:min}:${sec<10 ? `0${sec}`:sec}`;
    setTimer(timeRef.current -= 1);
    if(timeRef.current <0){
      setTimer(timeRef.current = 200);
    }
  },1000);
},[]);

const start = ()=>{
  props.setCount(props.numRef.current += 1);
}

  // 코드
  return (
    <Container>
      <Contents ref={BoxRef} back={back} isMobile={isMobile}>
        <MainText isMobile={isMobile}>
          <div>Invitation</div>
          <Time ref={time} isMobile={isMobile}></Time>
          <div>최재근의 세계로 초대합니다</div>
        </MainText>
        <span className="frame01"><img src={frame02} alt="초대장 프레임이미지" /></span>
        <button  onClick={()=>{
          start();
          setTimer(timeRef.current = 200);
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
width:${props=>props.isMobile ? "400px":"650px"};
height:${props=>props.isMobile ? "16rem":"26rem"};
padding:4rem 0;
background:no-repeat center url(${props=>props.back});
background-size:cover;
text-align:center;
position:absolute;
top:5%;
left:50%;
transform:translate(-50%);
font-weight:bold;
transition: 1s ease-in-out;
color:#fff;
  button{
    position:absolute;
    bottom:${props=>props.isMobile ? "20px":"50px"};
    left:50%;
    transform:translate(-50%);
    margin-top:10px;
    font-weight:bold;
    padding:${props=>props.isMobile ? "10px 15px":"20px 30px"};
    background-color:transparent;
    border:2px solid #fff;
    color:#fff;
    border-radius:20px;
    cursor:pointer;
    z-index:6666;
    transition: 1s ease-in-out;
  }
  span{
    position:absolute;
  }
  .frame01{
    width:${props=>props.isMobile ? "450px":"700px"};
    top:-25px;
    left:-25px;
    transition: 1s ease-in-out;
  }
`;
const Time = styled.div`
width:380px;
font-size:${props=>props.isMobile ? "40px":"80px"};
padding-bottom:20px;
margin:0 auto;
transition: 1s ease-in-out;
`;
const MainText = styled.div`
  font-size:${props=>props.isMobile ? "20px":"40px"};
  text-align:center;
  transition: 1s ease-in-out;
`;