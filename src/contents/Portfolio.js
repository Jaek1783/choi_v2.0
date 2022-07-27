import React,{useRef, useState} from "react";
import styled from "styled-components";
import left from "./../img/icon/left.png";
import right from "./../img/icon/right.png";



const Portfolio = ()=>{
    const project = [
        {id:4, title:'1'},
        {id:3, title:'2'},
        {id:2, title:'3'},
        {id:1, title:'1'},
        {id:0, title:'2'},
        {id:-1, title:'3'},
        {id:-2, title:'1'},
        {id:-3, title:'2'},
        {id:-4, title:'3'},
    ];
    const [num, setNum] = useState(0);
    const numRef = useRef(0);
    const slideRef= useRef(null);
    const projectRef = useRef(null);

    const leftButtonClick = ()=>{
        if(num < 3){
            slideRef.current.style.transition = "all .3s ease-in-out";
            setNum(numRef.current += 1);
            slideRef.current.style.marginLeft = (numRef.current * 34) + "rem";
        }
        if(num === 2){
            setTimeout(()=>{
                slideRef.current.style.transition = "none";
                setNum(numRef.current = 0);
                slideRef.current.style.marginLeft = 0 + "rem";
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
                setNum(numRef.current = 0);
                slideRef.current.style.marginLeft = 0 + "rem";
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
                            <Slide key={idx} data-idx={l.id} className={num == l.id ? "active": ""} ref={projectRef}></Slide>
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
width:15rem;
height:20rem;
    margin:0 1rem;
    background-color:rgb(90, 40, 190);
    border-radius:30px;
`;
const Button = styled.div`
width:50px;
position:absolute;
top:50%;
`;