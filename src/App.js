import './App.css';
import React, {useState, useRef} from "react";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import back from './img/back01.jpg';

//공통버젼
import Prograss from './Prograss';

import Intro from './Contents/Intro';

// mobile버젼
import Header_Mobile from "./Mobile/Header_Mobile";
import MainButton_Mobile from './Mobile/MainButton_Mobile';

import AboutMe_Mobile from './Mobile/Contents/AboutMe_Mobile';
import AboutMe02_Mobile from './Mobile/Contents/AboutMe02_Mobile';
import Portfolio_Mobile from './Mobile/Contents/Portfolio_Mobile';
import Contact_Mobile from './Mobile/Contents/Contact_Mobile';
import Welcome_Mobile from './Mobile/Contents/Welcome_Mobile';

// pc버젼
import Header from './Header';
import MainButton from './MainButton';

import AboutMe from './Contents/AboutMe';
import AboutMe02 from './Contents/AboutMe02';
import Portfolio from './Contents/Portfolio';
import Contact from './Contents/Contact';
import Welcome from './Contents/Welcome';

function App() {
  const isMobile = useMediaQuery({
    query : "(max-width:425px)"
  });
  const numRef = useRef(0);
  const [count, setCount] = useState(numRef.current);
  const scrollRef = useRef(null);
  // 코드
  return (
    <Container back={back} className="App">
      {/* 프로그래스 바 */}
      <Prograss count = {count}/>
      {/* 네비게이션 */}
      {isMobile ?  <Header_Mobile setCount = {setCount} numRef={numRef}/> :  <Header setCount = {setCount} numRef={numRef}/>}
      {/* 스크롤 작동 버튼 */}
      {isMobile ?   <MainButton_Mobile setCount = {setCount} numRef={numRef}/> :  <MainButton setCount = {setCount} numRef={numRef}/>}
      {/* 포트폴리오 컨텐츠 */}
      <Contents numRef={numRef}>
        <Intro setCount = {setCount} numRef={numRef} scrollRef = {scrollRef}/>
        {isMobile ?  <AboutMe_Mobile numRef={numRef}/> :  <AboutMe numRef={numRef}/>}
        {isMobile ?  <AboutMe02_Mobile numRef={numRef}/> :  <AboutMe02 numRef={numRef}/>}
        {isMobile ?  <Portfolio_Mobile/> : <Portfolio/>}
        {isMobile ?  <Contact_Mobile/> : <Contact/>}
        {isMobile ?  <Welcome_Mobile/> : <Welcome/>}
        
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