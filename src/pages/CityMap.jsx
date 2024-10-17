import { useState,useEffect } from "react";
import { XMLParser } from 'fast-xml-parser';
import sunrise from "../asset/sunrise.png"
import suntraisit from "../asset/suntransit.png"
import sunset from "../asset/sunset.png"
import './CityMap.css'
import AreaList from "../component/AreaList";
import Button from '../component/Button'

let areas = "가거도, 가평, 강릉, 강원고성, 강진, 강화, 거제, 거창, 격렬비도, 경기광주, 경산, 경주, 경주시감포읍, 경주시산내면, 계룡, 고령, 고성, 고양, 고창, 고흥, 곡성, 공주, 과천, 광명, 광양, 광주, 괴산, 괴산군연풍면, 구례, 구리, 구미, 군산, 군위, 군포, 금산, 기장, 김제, 김천, 김천시부항면, 김포, 김해, 나주, 남양주, 남원, 남해, 논산, 단양, 달성, 담양, 당진, 대관령, 대구, 대덕전파천문대, 대전, 덕적도, 독도, 동두천, 동해, 마라도, 목포, 무안, 무주, 문경, 밀양, 백령도, 변산, 보령, 보성, 보은, 보현산천문대, 봉화, 부산, 부안, 부여, 부천, 사천, 산청, 삼산도, 삼척, 상주, 서귀포, 서산, 서울, 서천, 성남, 성산일출, 성주, 세종, 소백산천문대, 속초, 수원, 순창, 순천, 승주, 시흥, 신안, 신안군임자면, 아산, 안동, 안산, 안성, 안양, 양구, 양산, 양양, 양주, 양평, 어청도, 여수, 여수공항, 여주, 연세KVN, 연천, 연평도, 영광, 영덕, 영동, 영암, 영양, 영월, 영주, 영천, 예산, 예천, 오산, 옥천, 옹진, 완도, 완주, 용인, 울릉, 울산, 울산KVN, 울주, 울진, 원주, 위도, 음성, 의령, 의성, 의왕, 의정부, 이천, 익산, 인제, 인제군기린면, 인천, 임실, 장성, 장수, 장흥, 전주, 정선, 정읍, 제주, 제주레이더, 제천, 주문진, 증평, 진도, 진안, 진주, 진천, 진해, 창녕, 창원, 천안, 철원, 청도, 청송, 청양, 청주, 청주공항, 추자도, 추풍령, 춘양, 춘천, 충주, 칠곡, 탐라KVN, 태백, 태안, 통영, 파주, 평창, 평창KVN, 평택, 포천, 포항, 하남, 하동, 함안, 함양, 함평, 합천, 해남, 홍성, 홍천, 홍천군내면, 홍천군서석면, 화성, 화순, 화천, 횡성, 흑산도 ".split(', ');






const CityMap = ()=>{
  const [data, setData] = useState(null); // 상태 관리
  const [area,setarea] = useState(areas);
  const [loading, setLoading] = useState(false);



  const [selectArea,setselectArea] = useState("서울");
  const [selectTime,setselectTime] = useState('20221010');
  const [selectMode,setselectMode] = useState(0);

  const search = () =>{
    let url = 'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo'; /*URL*/
    let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'vELkhJGClwAD5tE06VybD4%2FTShQvRTzC4vDDbS5Wx%2Bh%2BQaACBxCmNnsm1togVnVHjkmeNwD41HJbMaVPnox%2Ffg%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('locdate') + '=' + encodeURIComponent(selectTime); /**/
    queryParams += '&' + encodeURIComponent('location') + '=' + encodeURIComponent(selectArea); /**/
    
    return url + queryParams;
  }

  const fetchData = async () => {
    setLoading(true); // 로딩 상태 시작
    try {
      const response = await fetch(search()); // XML 데이터 가져오기
      const xmlText = await response.text(); // XML을 텍스트로 변환
      const parser = new XMLParser(); // fast-xml-parser 사용
      const jsonData = parser.parse(xmlText); // XML을 JSON으로 변환
      setData(jsonData); // 변환된 데이터를 상태에 저장
      console.log(jsonData)
    } catch (error) {
      console.error("Error fetching or parsing XML:", error);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  // 데이터가 아직 로드되지 않았을 경우 로딩 메시지 표시
  //if (!data) return <div>Loading...</div>;
  const mode = () =>{
    switch (selectMode){
      case 0 : 
      return sunrise;
      case 1:
        return suntraisit;
        case 2: 
        return sunset
    }
  }

  function formatTime(timeStr) {
    // 문자열이 3자리인 경우 앞에 '0'을 추가
    timeStr = String(timeStr)
    if (timeStr.length === 3) {
      timeStr = '0' + timeStr;
    }
  
    // 앞의 2자리 (시)와 뒤의 2자리 (분)를 분리하여 :로 결합
    const hours = timeStr.slice(0, 2);
    const minutes = timeStr.slice(2, 4);
  
    return `${hours}:${minutes}`;
  }

  const mode2 = () =>{
    if(!data)return "no data"
    try{
    switch (selectMode){
      case 0 : 
      return formatTime(data.response.body.items.item.sunrise);
      case 1:
        return formatTime(data.response.body.items.item.suntransit);
        case 2: 
        return formatTime(data.response.body.items.item.sunset);
    }
  }catch(e){
    return "no data"
  }
  }

  // XML 데이터에서 필요한 값을 추출해 렌더링
  return (
    
    <div>
      
      <div className="imgbox">
       
            
      <img src={mode()}className="immg"/>
      <div className="imgtext">{mode2()}</div>
      </div>
      <div className="content">
        <input type="date" value={selectTime.slice(0, 4) + '-' + selectTime.slice(4, 6) + '-' + selectTime.slice(6, 8)} onChange={(e)=>{setselectTime(e.target.value.replaceAll("-",""))}}/>
          <input className ="searchbar" placeholder="검색어를 입력" />
          <div className="lll">
          <div className="listWrapper">
          {area.map((i)=>(
              <AreaList key = {i} text={i}  setselectArea = {setselectArea}/>
             ))}
          
          </div>
          <Button text={"일출"}  onClick={()=>setselectMode(0)}/>
          <Button text={"일남중"} onClick={()=>setselectMode(1)}/>
          <Button text={"일몰"} onClick={()=>setselectMode(2)} />
          
        </div>
      </div>
     <Button text={"검색"} onClick={()=>fetchData()}/>
    </div>
  );
}

export default CityMap