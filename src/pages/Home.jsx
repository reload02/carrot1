import './Home.css'
import List from "../component/List"
import { useContext } from 'react'
import { itemDatasContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = ()=>{

    const navigate = useNavigate();

    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }


    const itemDatas = useContext(itemDatasContext);
    return (
    <div className="Home">
        <button onClick={()=>{MovePage('newcontent')}} className='plusButton'>+</button>
        {itemDatas.map((items)=>(
            <List items = {items} key={items.itemId}/>))}
        
        
       
    </div>
    )
}

export default Home