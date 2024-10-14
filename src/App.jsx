import './App.css'
import Home from './pages/Home'
import Chatting from './pages/Chatting'
import CityLife from './pages/CityLife'
import CityMap from './pages/CityMap'
import EditContent from './pages/EditContent'
import MyInfo from './pages/MyInfo'
import NewContent from './pages/NewContent'
import ItemInfo from './pages/itemInfo'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import { createContext } from 'react'

let itemDatas = [
  {
    "itemId": 1,
    "img": [],
    "title": "1번물건 테스트",
    "explain": "설명 \n\n\n\n\n\nㅁㄴㅇㅁㄴㅇ\n\n\nㅁㄴㅇ\n\n없음",
    "lenth": "100m",
    "locationq": "행운동",
    "uploadTime": "10분전",
    "price": 10000,
    "chatTime": 6,
    "heart": 10,
    "seeTime": 0,
    "userID": 1,
    "category": "전자제품",
    "hopeTradePlace": "행운동 공원",
    "canEnul": false
  },
  {
    "itemId": 2,
    "img": [],
    "title": "2번물건 테스트",
    "explain": "조금 사용함",
    "lenth": "50m",
    "locationq": "서초동",
    "uploadTime": "30분전",
    "price": 20000,
    "chatTime": 3,
    "heart": 20,
    "seeTime": 2,
    "userID": 2,
    "category": "의류",
    "hopeTradePlace": "서초동 카페",
    "canEnul": true
  },
  {
    "itemId": 3,
    "img": [],
    "title": "3번물건 테스트",
    "explain": "사용감 있음",
    "lenth": "150m",
    "locationq": "강남구",
    "uploadTime": "1시간전",
    "price": 15000,
    "chatTime": 1,
    "heart": 15,
    "seeTime": 5,
    "userID": 3,
    "category": "가구",
    "hopeTradePlace": "강남구 상가",
    "canEnul": false
  },
  {
    "itemId": 4,
    "img": [],
    "title": "4번물건 테스트",
    "explain": "새 상품",
    "lenth": "70m",
    "locationq": "종로구",
    "uploadTime": "5분전",
    "price": 50000,
    "chatTime": 10,
    "heart": 8,
    "seeTime": 3,
    "userID": 4,
    "category": "스포츠용품",
    "hopeTradePlace": "종로구 공원",
    "canEnul": true
  },
  {
    "itemId": 5,
    "img": [],
    "title": "5번물건 테스트",
    "explain": "거의 새 상품",
    "lenth": "30m",
    "locationq": "마포구",
    "uploadTime": "1시간전",
    "price": 30000,
    "chatTime": 2,
    "heart": 7,
    "seeTime": 10,
    "userID": 5,
    "category": "전자제품",
    "hopeTradePlace": "마포구 상가",
    "canEnul": false
  },
  {
    "itemId": 6,
    "img": [],
    "title": "6번물건 테스트",
    "explain": "약간 손상 있음",
    "lenth": "120m",
    "locationq": "서대문구",
    "uploadTime": "3시간전",
    "price": 18000,
    "chatTime": 0,
    "heart": 4,
    "seeTime": 7,
    "userID": 6,
    "category": "가전",
    "hopeTradePlace": "서대문구 공원",
    "canEnul": true
  },
  {
    "itemId": 7,
    "img": [],
    "title": "7번물건 테스트",
    "explain": "사용 흔적 있음",
    "lenth": "90m",
    "locationq": "송파구",
    "uploadTime": "1일전",
    "price": 22000,
    "chatTime": 5,
    "heart": 12,
    "seeTime": 12,
    "userID": 7,
    "category": "패션잡화",
    "hopeTradePlace": "송파구 카페",
    "canEnul": false
  },
  {
    "itemId": 8,
    "img": [],
    "title": "8번물건 테스트",
    "explain": "좋은 상태",
    "lenth": "85m",
    "locationq": "은평구",
    "uploadTime": "2시간전",
    "price": 25000,
    "chatTime": 4,
    "heart": 6,
    "seeTime": 15,
    "userID": 8,
    "category": "서적",
    "hopeTradePlace": "은평구 도서관",
    "canEnul": true
  },
  {
    "itemId": 9,
    "img": [],
    "title": "9번물건 테스트",
    "explain": "매우 깨끗함",
    "lenth": "110m",
    "locationq": "용산구",
    "uploadTime": "20분전",
    "price": 32000,
    "chatTime": 8,
    "heart": 18,
    "seeTime": 8,
    "userID": 9,
    "category": "취미",
    "hopeTradePlace": "용산구 카페",
    "canEnul": false
  },
  {
    "itemId": 10,
    "img": [],
    "title": "10번물건 테스트",
    "explain": "미개봉 상품",
    "lenth": "60m",
    "locationq": "광진구",
    "uploadTime": "5분전",
    "price": 45000,
    "chatTime": 9,
    "heart": 11,
    "seeTime": 4,
    "userID": 10,
    "category": "주방용품",
    "hopeTradePlace": "광진구 마트",
    "canEnul": true
  },
  {
    "itemId": 11,
    "img": [],
    "title": "11번물건 테스트",
    "explain": "사용 흔적 거의 없음",
    "lenth": "40m",
    "locationq": "성동구",
    "uploadTime": "40분전",
    "price": 37000,
    "chatTime": 6,
    "heart": 14,
    "seeTime": 2,
    "userID": 11,
    "category": "자동차용품",
    "hopeTradePlace": "성동구 주차장",
    "canEnul": false
  },
  {
    "itemId": 12,
    "img": [],
    "title": "12번물건 테스트",
    "explain": "상태 양호",
    "lenth": "95m",
    "locationq": "영등포구",
    "uploadTime": "1일전",
    "price": 29000,
    "chatTime": 1,
    "heart": 9,
    "seeTime": 0,
    "userID": 12,
    "category": "의류",
    "hopeTradePlace": "영등포구 공원",
    "canEnul": true
  },
  {
    "itemId": 13,
    "img": [],
    "title": "13번물건 테스트",
    "explain": "약간 사용감 있음",
    "lenth": "130m",
    "locationq": "동작구",
    "uploadTime": "2일전",
    "price": 41000,
    "chatTime": 2,
    "heart": 13,
    "seeTime": 6,
    "userID": 13,
    "category": "스포츠용품",
    "hopeTradePlace": "동작구 체육관",
    "canEnul": false
  },
  {
    "itemId": 14,
    "img": [],
    "title": "14번물건 테스트",
    "explain": "아주 깨끗함",
    "lenth": "55m",
    "locationq": "금천구",
    "uploadTime": "3시간전",
    "price": 34000,
    "chatTime": 4,
    "heart": 7,
    "seeTime": 9,
    "userID": 14,
    "category": "생활용품",
    "hopeTradePlace": "금천구 카페",
    "canEnul": true
  },
];


export const itemDatasContext = createContext();


function App() {


  return (
   <div className='App'>
      <Header/>
      <itemDatasContext.Provider value={itemDatas}>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/chatting" element={<Chatting/>}/>
          <Route path = "/citylife" element={<CityLife/>}/>
          <Route path = "/citymap" element={<CityMap/>}/>
          <Route path = "/editcontent" element={<EditContent/>}/>
          <Route path = "/myinfo" element={<MyInfo/>}/>
          <Route path = "/newcontent" element={<NewContent/>}/>
          <Route path = "/iteminfo/:id" element={<ItemInfo/>}/>
        </Routes>
    </itemDatasContext.Provider>
    <Footer className="Footer"/>
    </div>
    
  )
}

export default App
