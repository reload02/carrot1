import './Button.css'

const Button = ({text,type,onClick}) => {

    switch (type) {
        case "basic" : 
            return (
            <button className ="button_basic" onClick={onClick}>{text}</button>
            )
        case "footer" : 
            return (
            <button className ="button_footer" onClick={onClick}>{text}</button>
            )
        default :
            return (
            <button className ="button" onClick={onClick}>{text}</button>
            )
        }
    
        
}

export default Button;