import './Home.css'
import List from "../component/List"
import { useContext, useState ,useEffect,useRef} from 'react'
import { itemDatasContext } from '../App'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import Button from '../component/Button'
import Footer from '../component/Footer'

const Home = ()=>{
    const {items} = useContext(itemDatasContext);
    const navigate = useNavigate();
    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }

    
    
    return (
        <>
        <Header 
        leftChild = {<select className='select'>
                        <option value="역삼동">역삼동</option>
                        <option value="행운동" >행운동</option>
                        <option value="1" >내 동네 설정</option>
                    </select> }
        rightChild = {[<Button text = {"🔎"}/>, <Button text = {"🔔"}/>]}
        />
    <div className="Home">
        <button onClick={()=>{MovePage('newcontent')}} className='plusButton'>+</button>
        {items.map((i)=>(
            <List items = {i} key={i.itemId}/>))}
    </div>
    <Footer/>
    </>
    )
}

export default Home