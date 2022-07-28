import './App.css';
import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import back from './img/back01.jpg';

import Prograss from './Prograss';
import Header from './Header';
import MainButton from './MainButton';
import Intro from './contents/Intro';
import AboutMe from './contents/AboutMe';
import AboutMe02 from './contents/AboutMe02';
import Portfolio from './contents/Portfolio';
import Contect from './contents/Contect';

function App() {
  const numRef = useRef(0);
  const [count, setCount] = useState(numRef.current);
  const scrollRef = useRef(null);
  // 코드
  return (
    <Container back={back} className="App">
      <Prograss count = {count}/>
      <Header setCount = {setCount} numRef={numRef}/>
      <MainButton setCount = {setCount} numRef={numRef}/>
      <Contents numRef={numRef}>
        <Intro setCount = {setCount} numRef={numRef} scrollRef = {scrollRef}/>
        <AboutMe numRef={numRef}/>
        <AboutMe02 numRef={numRef}/>
        <Portfolio/>
        <Contect/>
      </Contents>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:0;
  width:100%;
  height:100vh;
  background:center url(${props=>props.back});
  background-repeat:no-repeat;
  background-size:cover;
  overflow:hidden;
`;
const Contents = styled.div`
width:100%;
position:absolute;
top:-${props=>props.numRef.current}00vh;
left:0;
transition: .5s ease-in-out;
`;