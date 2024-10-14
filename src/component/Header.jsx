import './Header.css'

const Header = ()=>{
    return (
    <div className="Header">
        <span className='selectBox'>
        <select className='select'>
            <option value="역삼동">역삼동</option>
            <option value="행운동" >행운동</option>
            <option value="1" >내 동네 설정</option>
        </select>
        </span>
        <button>🔍</button>
        <button>🔔</button>
    </div>
        )
}

export default Header