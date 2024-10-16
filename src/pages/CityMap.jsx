const CityMap = ()=>{
  fetch('https://apis.data.go.kr/1360000/TourStnInfoService1/getTourStnVilageFcst1?ServiceKey=vELkhJGClwAD5tE06VybD4%2FTShQvRTzC4vDDbS5Wx%2Bh%2BQaACBxCmNnsm1togVnVHjkmeNwD41HJbMaVPnox%2Ffg%3D%3D&pageNo=1&numOfRows=10&dataType=json&CURRENT_DATE=2024101010&HOUR=23&COURSE_ID=23')
            .then(res=>res.json())
            .then(json=> console.log(json))


    return (<div>123</div>)
}

export default CityMap