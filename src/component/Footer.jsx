import './Footer.css'
import { useNavigate } from 'react-router-dom'



const Footer = ()=>{

    const navigate = useNavigate();

    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }

    return (<div className='Footer'>
        <button onClick={()=>{MovePage("")}}>🛖</button>
        <button onClick={()=>{MovePage("citylife")}}>🎶</button>
        <button onClick={()=>{MovePage("citymap")}}>🗺️</button>
        <button onClick={()=>{MovePage("chatting")}}>🗣️</button>
        <button onClick={()=>{MovePage("myinfo")}}>😊</button>
    </div>)
}

export default Footer