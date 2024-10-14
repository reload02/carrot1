import './List.css'

const List = ()=>{
return(
    <div className="List">
        {/*사진 , 제목, (가까우면 거리)지역, 시간 , 태그 ,  가격 , 더보기 (숨기기,설명,신고,닫기) 관심수 채팅수 좋아요수*/}
        <div className="imgCont"><button className='img'>사진입니다</button></div>
        <div className='box'>
            <div className="textbox">
                <div className='inbox'>
                    <div className="titleCont">중고가전팝니다.</div>
                    <div className="infoCont">행운동 - 1시간전</div>
                    <div className="priceCont">10,000원</div>
                </div>
                    <button className="moreCont">:</button>
            </div>
                <div className="responeCont">♡13 ☏2 ♨90</div>
        </div>
        
    </div>
)
}

export default List