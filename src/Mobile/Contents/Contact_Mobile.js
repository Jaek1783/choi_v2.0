import React from "react";
import styled from "styled-components";
import nameCard from "./../../img/Contact/NamePaper.png";
const Contect = ()=>{
    return(
        <Container>
            <div className="contect">
                <span>이름 : 최재근</span>
                <span>나이 : 29세</span>
                <span>사는 곳 : 서울시 마포구</span>
                <span>개발경력 : 국비지원 퍼블리싱 6개월, 독학 4개월, 개발강의수료증 3개, 최종 배포 프로젝트 3개  </span>
                <span><a href="tel:010 - 8591 - 7542">전화번호 : 010 - 8591 - 7542</a></span>
                <span>이메일 : jaek1783@gmail.com</span>
                <span className="contact" onClick={()=>{
                    window.open('https://blog.naver.com/jaek1783', '_blank');
                }}>블로그 : https://blog.naver.com/jaek1783</span>
                <span className="contact" onClick={()=>{
                    window.open('https://github.com/Jaek1783', '_blank');
                }}>깃허브 : https://github.com/Jaek1783</span>
            </div>
            <div className="me">
                <img src={nameCard} alt="나의 사진"/>
            </div>
        </Container>
    )
}; export default Contect;

const Container = styled.div`
width:95%;
height:35rem;
margin:7rem auto 0;
background-color:rgba(90, 40, 190, 0.677);
padding:2rem;
color:#fff;
display:flex;
flex-direction:column;
    .contect{
        display:flex;
        flex-direction:column;
        span{
            padding-bottom:1rem;
            font-weight:bold;
            a{
                color: #fff;
                text-decoration: none ;
            }
        }
        .contact{
            cursor:pointer;
        }
    }

`;