import './App.css';
import React, {useState, useRef, useEffect} from "react";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import back from './img/back01.jpg';

import { project } from './Context/Context';
import { AppContext } from './Context/Context';
// PC/Tablet/Mobile 공통버젼
import Prograss from './Prograss';
import Intro from './Contents/Intro';

// PC/Tablet 공통버젼
import Header from './Header';
import MainButton from './MainButton';

// PC버젼
import AboutMe from './Contents/AboutMe';
import AboutMe02 from './Contents/AboutMe02';
import Portfolio from './Contents/Portfolio';
import Contact from './Contents/Contact';
import Welcome from './Contents/Welcome';

// Tablet 버젼
import AboutMe_Tablet from './Tablet/Contents/AboutMe_Tablet';
import Portfolio_Tablet from './Tablet/Contents/Portfolio_Tablet';
import Contact_Tablet from './Tablet/Contents/Contact_Tablet';

// mobile버젼
import Header_Mobile from "./Mobile/Header_Mobile";
import MainButton_Mobile from './Mobile/MainButton_Mobile';

import AboutMe_Mobile from './Mobile/Contents/AboutMe_Mobile';
import AboutMe02_Mobile from './Mobile/Contents/AboutMe02_Mobile';
import Portfolio_Mobile from './Mobile/Contents/Portfolio_Mobile';
import Contact_Mobile from './Mobile/Contents/Contact_Mobile';
import Welcome_Mobile from './Mobile/Contents/Welcome_Mobile';
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
function App() {
  const { y } = useScroll();
  let scrollY = Math.floor(y/3457*100);

  const scrollRef = useRef(null);
  
  const isTablet = useMediaQuery({
    query : "(min-width:426px) and (max-width:768px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:425px)"
  });
  const numRef = useRef(0);
  const [count, setCount] = useState(numRef.current);
  // 코드
  return (
    <div className="App">
      
      <Background back ={back}></Background>
      
      {/* 프로그래스 바 */}
      <Prograss count = {count} scrollY={scrollY}/>
      
      {/* 네비게이션 */}
      {isMobile ?  <Header_Mobile setCount = {setCount} numRef={numRef}/> :  <Header setCount = {setCount} numRef={numRef}/>}
      
      {/* 스크롤 작동 버튼 */}
      {isMobile ?   <MainButton_Mobile setCount = {setCount} numRef={numRef}/> : isTablet ? <MainButton_Mobile setCount = {setCount} numRef={numRef}/> : <MainButton setCount = {setCount} numRef={numRef}/>}
      
      {/* 포트폴리오 컨텐츠 */}
      <Container numRef={numRef}>

        <Contents numRef={numRef} ref = {scrollRef}>

          <Intro setCount = {setCount} numRef={numRef}/>

          {isMobile ?  <AboutMe_Mobile numRef={numRef}/> :  isTablet ? <AboutMe_Tablet numRef={numRef}/> : <AboutMe numRef={numRef}/>}

          {isMobile ?  <AboutMe02_Mobile numRef={numRef}/> : isTablet ? <AboutMe02_Mobile numRef={numRef}/> : <AboutMe02 numRef={numRef}/> }

        <AppContext.Provider value={project}>
        {isMobile ?  <Portfolio_Mobile/> : isTablet ? <Portfolio_Tablet/> :  <Portfolio/>}
        </AppContext.Provider>
          {isMobile ?  <Contact_Mobile/> : isTablet ? <Contact_Tablet/> : <Contact/>}

          {isMobile ?  <Welcome_Mobile/> : isTablet ? <Welcome_Mobile/> : <Welcome/>}
        </Contents>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
width:100%;
height:${props=>props.numRef.current === 0 ? "800":""}px;
position:fixed;
top:0;
left:0;
`;

const Background = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:0;
  width:100%;
  height:100vh;
  background:repeat-x center url(${props=>props.back});
  background-size:cover;

`;
const Contents = styled.div`
overflow:hidden;
width:100%;
position:absolute;
top:-${props=>props.numRef.current}00vh;
left:0;
transition: .5s ease-in-out;
`;