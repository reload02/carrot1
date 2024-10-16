import './NewContent.css'
import { useState, useContext } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { itemDatasContext } from '../App'

const EditContent = ()=>{

    const { id } = useParams();
    const {items,setItems,itemId} = useContext(itemDatasContext);

    const [title , setTitle] = useState(items.filter((i)=>i.itemId==id)[0].title);
    const [price , setPrice] = useState(items.filter((i)=>i.itemId==id)[0].price);
    const [explain , setExplan] = useState(items.filter((i)=>i.itemId==id)[0].explain);
    const [enull , setEnull] = useState(items.filter((i)=>i.itemId==id)[0].canEnul);

    const item = {
        title : "" ,
        price : "",
        explain : "",
        enull : "",
    }

    const navigate = useNavigate();
    const MovePage = () =>{
        navigate('/')
    }
    const delItem = (itemId)=>{
        setItems(items.filter((item)=>
             !(item.itemId==itemId)
             ))
     }
   
    const editItem  = (item)=>{ 

        console.log(items[id-1])
        
       items[id-1].title = item.title
       items[id-1].explain = item.explain
       items[id-1].price = item.price
       items[id-1].canEnul = item.canEnul
       console.log(items[id-1])


        setItems([...items]
        )
        
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
            editItem(item)
            MovePage()
        }}>작성완료</button>
        </div>)
}

export default EditContent