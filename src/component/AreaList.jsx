import './AreaList.css'
import { useState } from 'react';

const AreaList = ({text,setselectArea}) =>{
const [isSel,setISsel] = useState("");

const highlighter  = ()=>{
    setISsel("_selected")

    setTimeout(()=>{
        setISsel("");
    },500)
}


return(
<div onClick={()=>{setselectArea(text); highlighter()}} className={`arealist${isSel}`} >
    {text}
</div>

)

}

export default AreaList