import React,{useRef, useState} from "react";
import styled from "styled-components";
import left from "./../img/icon/left.png";
import right from "./../img/icon/right.png";
import img01 from "./../img/Portfolio/bbangssaem.png";
import img02 from "./../img/Portfolio/tetris.gif";
import img03 from "./../img/Portfolio/bucket.png";
import img04 from "./../img/Portfolio/youknowme.png";
import img05 from "./../img/Portfolio/salad.png";


const Portfolio = ()=>{
    const project = [
        {id:4, title:'프로젝트 01', desc:'동네카페 메인페이지', img :img01, adress:"https://github.com/Jaek1783/BbangSsaem"},
        {id:3, title:'프로젝트 02', desc:'테트리스', img :img02, adress:"https://github.com/Jaek1783/Tetris-Game"},
        {id:2, title:'프로젝트 03', desc:'나의 버킷리스트', img :img03, adress:"https://github.com/Jaek1783/bucket"},
        {id:1, title:'프로젝트 04', desc:'나를 아시나요?', img :img04, adress:"https://github.com/Jaek1783/who"},
        {id:0, title:'프로젝트 05', desc:'샐러드브라더', img :img05, adress:"https://github.com/Jaek1783/salad"},
        {id:-1, title:'프로젝트 01', desc:'동네카페 메인페이지', img :img01, adress:"https://github.com/Jaek1783/BbangSsaem"},
        {id:-2, title:'프로젝트 02', desc:'테트리스', img :img02, adress:"https://jaek1783.github.io/Tetris-Game/"},
        {id:-3, title:'프로젝트 03', desc:'나의 버킷리스트', img :img03, adress:"https://github.com/Jaek1783/bucket"},
        {id:-4, title:'프로젝트 04', desc:'나를 아시나요?', img :img04, adress:"https://www.youknowme.tk/"},
    ];
    const [num, setNum] = useState(0);
    const numRef = useRef(0);
    const slideRef= useRef(null);
    const projectRef = useRef(null);

    const leftButtonClick = ()=>{
        if(num < 4){
            slideRef.current.style.transition = "all .3s ease-in-out";
            setNum(numRef.current += 1);
            slideRef.current.style.marginLeft = (numRef.current * 34) + "rem";
        }
        if(num === 2){
            setTimeout(()=>{
                slideRef.current.style.transition = "none";
                setNum(numRef.current = -2);
                slideRef.current.style.marginLeft = (numRef.current * 34) + "rem";
            },300);
        }
    }
    const rightButtonClick = ()=>{
        if(num > -3){
            slideRef.current.style.transition = "all .3s ease-in-out";
            setNum(numRef.current -= 1);
            slideRef.current.style.marginLeft = (numRef.current * 34) + "rem";
        }
        if(num === -2){
            setTimeout(()=>{
                slideRef.current.style.transition = "none";
                setNum(numRef.current = 2);
                slideRef.current.style.marginLeft = (numRef.current * 34) + "rem";
            },500);
        }
    }
    return(
        <Container>
            <Button className="lt" onClick={()=>{
                leftButtonClick();
            }}><img src={left} alt="왼쪽 화살표" /></Button>
            <Contents>
                <SlideContainer ref={slideRef}>
                    {project.map((l,idx)=>{
                        return(
                            <Slide key={idx} data-idx={l.id} className={num == l.id ? "active": "noneActive"} ref={projectRef}>
                                <div>
                                <div>{l.title}</div>
                                <div>{l.desc}</div>
                                </div>
                                <span><img src={l.img} alt={l.desc+"이미지"} /></span>
                                <button onClick = {()=>{
                                    if(num == l.id){
                                        window.open(l.adress, '_blank');
                                    }
                                }}>구경가기</button>
                            </Slide>
                        )
                    })}
                </SlideContainer>
            </Contents>
            <Button className="rt" onClick={()=>{
                rightButtonClick();
            }}><img src={right} alt="오른쪽 화살표" /></Button>
        </Container>
    )
}; export default Portfolio;

const Container = styled.div`
width:100vw;
height:100vh;
position:relative;
`;

const Contents = styled.div`
width:51rem;
height:100vh;
overflow:hidden;
margin:0 auto;
display:flex;
justify-content:center;
align-items: center;
align-content :center;
`;
const SlideContainer = styled.div`
margin-left:0;
display:flex;
justify-content:center;
align-items: center;
align-content :center;
`;
const Slide = styled.div`
    padding:.5rem;
    width:15rem;
    height:20rem;
    margin:0 1rem;
    background-color:rgb(90, 40, 190);
    border-radius:30px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    color:#fff;
        button{
            padding:.5rem;
            border-radius:15px;
            border:none;
        }
`;
const Button = styled.div`
width:50px;
position:absolute;
top:50%;
`;