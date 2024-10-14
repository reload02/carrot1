import { useContext } from 'react'
import { itemDatasContext } from '../App'
import { useParams } from 'react-router-dom';
import './ItemInfo.css'

const ItemInfo = ()=>{
    const { id } = useParams();
    const itemDatas = useContext(itemDatasContext);

return(<div className='ItemInfo'>
    <button className='picture'>사진입니다</button>
    <div className='userInfo'>유저정보</div>
    <div className='itemInfo'>
        <div>
            {itemDatas[id-1].title}
        </div>
        {itemDatas[id-1].explain}</div>
</div>)
}

export default ItemInfo