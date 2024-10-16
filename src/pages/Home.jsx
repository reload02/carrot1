import './Home.css'
import List from "../component/List"
import { useContext, useState ,useEffect,useRef} from 'react'
import { itemDatasContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = ()=>{
    const {items} = useContext(itemDatasContext);
    const navigate = useNavigate();
    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }

    
    
    return (
    <div className="Home">
        <button onClick={()=>{MovePage('newcontent')}} className='plusButton'>+</button>
        {items.map((i)=>(
            <List items = {i} key={i.itemId}/>))}
    </div>
    )
}

export default Home