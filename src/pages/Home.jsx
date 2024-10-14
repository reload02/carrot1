import './Home.css'
import List from "../component/List"
import { useContext } from 'react'
import { itemDatasContext } from '../App'

const Home = ()=>{
    const itemDatas = useContext(itemDatasContext);
    return (
    <div className="Home">
        <button className='plusButton'>+</button>
        {itemDatas.map((items)=>(
            <List items = {items} key={items.itemId}/>))}
        
        
       
    </div>
    )
}

export default Home