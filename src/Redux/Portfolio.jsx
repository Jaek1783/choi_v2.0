import img01 from "./../img/Portfolio/bbangssaem.png";
import img02 from "./../img/Portfolio/tetris.gif";
import img03 from "./../img/Portfolio/bucket.png";
import img04 from "./../img/Portfolio/youknowme.png";
import img05 from "./../img/Portfolio/salad.png";
// initialize
const initState = {
    project : [
        {id:4, title:'프로젝트 01', desc:'동네카페 메인페이지', img :img01, adress:"https://github.com/Jaek1783/BbangSsaem"},
        {id:3, title:'프로젝트 02', desc:'테트리스', img :img02, adress:"https://github.com/Jaek1783/Tetris-Game"},
        {id:2, title:'프로젝트 03', desc:'나의 버킷리스트', img :img03, adress:"https://github.com/Jaek1783/bucket"},
        {id:1, title:'프로젝트 04', desc:'나를 아시나요?', img :img04, adress:"https://github.com/Jaek1783/who"},
        {id:0, title:'프로젝트 05', desc:'샐러드브라더', img :img05, adress:"https://github.com/Jaek1783/salad"},
        {id:-1, title:'프로젝트 01', desc:'동네카페 메인페이지', img :img01, adress:"https://github.com/Jaek1783/BbangSsaem"},
        {id:-2, title:'프로젝트 02', desc:'테트리스', img :img02, adress:"https://jaek1783.github.io/Tetris-Game/"},
        {id:-3, title:'프로젝트 03', desc:'나의 버킷리스트', img :img03, adress:"https://github.com/Jaek1783/bucket"},
        {id:-4, title:'프로젝트 04', desc:'나를 아시나요?', img :img04, adress:"https://www.youknowme.tk/"},
    ]
};
// Action
const CREATE = "pofol/CREATE";

// ActionCreateFunction
export function createProject (pofol){
    return{type:CREATE, pofol};
};

export default function reducer(state=initState, action={}){
    switch(action.type){
        default:
            return state;
    }
}
