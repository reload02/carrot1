import Button from './Button';
import './Footer.css'
import { useNavigate } from 'react-router-dom'



const Footer = ()=>{

    const navigate = useNavigate();

    const MovePage = (pageName) =>{
        navigate(`/${pageName}`)
    }

    return (<div className='Footer'>
        <Button text={"🛖"} type={"footer"} onClick={
            ()=>MovePage("")}/>
        <Button text={"🎶"} type={"footer"} onClick={
            ()=>MovePage("citylife")}/>
        <Button text={"🗺️"} type={"footer"} onClick={
            ()=>MovePage("citymap")}/>
        <Button text={"🗣️"} type={"footer"} onClick={
            ()=>MovePage("chatting")}/>
        <Button text={"😊"} type={"footer"} onClick={
            ()=>MovePage("myinfo")}/> 
    </div>)
}

export default Footer