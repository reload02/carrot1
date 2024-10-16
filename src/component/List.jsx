import './List.css'
import { useNavigate } from 'react-router-dom'

const List = ({items})=>{
    let isMore = false;
    const navigate = useNavigate();

    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }
   
return(
    <div className="List" onClick = {()=>{
        if(!isMore)MovePage(`iteminfo/${items.itemId}`)}}>
        {/*사진 , 제목, (가까우면 거리)지역, 시간 , 태그 ,  가격 , 더보기 (숨기기,설명,신고,닫기) 관심수 채팅수 좋아요수*/}
        <div className="imgCont"><button className='img'>사진입니다</button></div>
        <div className='box'>
            <div className="textbox">
                <div className='inbox'>
                    <div className="titleCont">{items.title}</div>
                    <div className="infoCont">{items.lenth} - {items.locationq} - {items.uploadTime} </div>
                    <div className="priceCont">{items.price}원</div>
                </div>
                    <button className="moreCont" onClick = {()=>{
                        isMore = true
                        
                        }}>:</button>
            </div>
                <div className="responeCont">♡{items.heart} ☏{items.chatTime}</div>
        </div>
        
    </div>
)
}

export default List