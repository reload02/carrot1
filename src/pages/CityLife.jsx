import Header from "../component/Header"
import Button from "../component/Button"
import Footer from "../component/Footer"


const CityLife = ()=>{
    return (<>
     <Header 
        leftChild = {<select className='select'>
                        <option value="역삼동">역삼동</option>
                        <option value="행운동" >행운동</option>
                        <option value="1" >내 동네 설정</option>
                    </select> }
        rightChild = {[<Button text = {"🔎"}/>, <Button text = {"🔔"}/>]}
        />
        <div> 
            동네생활
        </div>
        <Footer/>
        </>)
}

export default CityLife