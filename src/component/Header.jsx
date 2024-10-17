import './Header.css'
import Button from './Button'

const Header = ({leftChild,middleChild,rightChild})=>{

    return(
        <div className='Header'>
            <div className='left'>
                {leftChild}
            </div>
            <div className='middle'>
                {middleChild}
            </div>
            <div className='right'>
                {rightChild}
            </div>
        </div>


    )






    // return (
    // <div className="Header">
    //     <span className='selectBox'>
    //     <select className='select'>
    //         <option value="역삼동">역삼동</option>
    //         <option value="행운동" >행운동</option>
    //         <option value="1" >내 동네 설정</option>
    //     </select>
    //     </span>
    //     <Button text = {"🔎"}/>
    //     <Button text = {"🔔"}/>
    // </div>
    //     )
}

export default Header