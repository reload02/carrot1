import './NewContent.css'
import { useState, useContext } from 'react'
import { addItemContext } from '../App'
import { useNavigate } from 'react-router-dom'

const NewContent = ()=>{

    const newitem = useContext(addItemContext)
    const navigate = useNavigate();

    const MovePage = () =>{
        navigate('/')
    }
   
    

    const [title , setTitle] = useState("");
    const [price , setPrice] = useState(0);
    const [explain , setExplan] = useState("");
    const [enull , setEnull] = useState(false);

    const item = {
        title :"",
        price : "",
        explain : "",
        enull : "",
    }

    return (<div className='NewContent'>
        <div>상단부</div>
        <div className='pictures'>
            <button>사진추가</button>
            <div>사진슬라이드</div>
        </div>
        <div className='body'>
        <div className='title'>제목</div>
        <input className='inputTitle' placeholder='제목을 입력' onChange={(e)=>{setTitle(e.target.value)}} value={title}></input>
        <div className='title'>가격설정</div>
        <input className="inputTitle" placeholder='가격을 입력' onChange={(e)=>{
            if(Number.isNaN(e.target.value-0)) return;         
            if(price==0)setPrice(e.target.value.slice(1))
            else setPrice(e.target.value)
            }} value={price}></input>
        <>
        <span>가격제안받기</span>
        <input type='checkBox' onChange={()=>{
            setEnull(!enull)
        }}></input>
        </>
        
        <div>본문작성</div>
        <input className='inputexplan' placeholder='설명작성' onChange={(e)=>{setExplan(e.target.value)}}value={explain}></input>
        <div>거래희망장소</div>
        <select>거래희망장소
            <option value="a">1번집</option>
            <option value="b">2번집</option>
            <option value="c">3번집</option>
        </select>
        </div>
        
        <button className='end' onClick={()=>{
            item.title = title
            item.enull = enull
            item.explain = explain
            item.price = price
           newitem(item)
            MovePage()
        }}>작성완료</button>
        </div>)
}

export default NewContent