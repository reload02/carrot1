import { useContext } from 'react'
import { itemDatasContext } from '../App'
import { useParams } from 'react-router-dom';
import './ItemInfo.css'
import Header from '../component/Header';
import Button from '../component/Button';
const ItemInfo = ()=>{
    const { id } = useParams();
    const {items} = useContext(itemDatasContext);

return(<div className='ItemInfo'>
    <Header 
        leftChild={<Button text={"<"}/>}
        middleChild={<Button text={"정보"}/>}
        rightChild={<Button text={":"}/>}
        />
    <button className='picture'>사진입니다</button>
    <div className='userInfo'>유저정보</div>
    <div className='itemInfo'>
        <div className='title'>
            {(items.filter((i)=>i.itemId==id))[0].title}
        </div>
        {(items.filter((i)=>i.itemId==id))[0].explain}
    </div>
</div>)
}

export default ItemInfo