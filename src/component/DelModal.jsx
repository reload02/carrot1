import './DelModal.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemDatasContext } from '../App';


const Modal = ({ isOpen, onClose ,itemId}) => {
     const {items,setItems} = useContext(itemDatasContext);

     const nav = useNavigate();
    // 모달이 열려 있을 때만 렌더링
if (!isOpen) return null;

    const delItem = (itemId)=>{
       
       setItems(items.filter((item)=>
            !(item.itemId==itemId)
            ))

    }


    
    
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>게시글을 삭제 하시겠습니까?</h2>
          <p>삭제시 복구가 불가능 합니다.</p>
          <button onClick={()=>{onClose();
            delItem(itemId)
            
          }}>삭제</button>
          <button onClick={()=>{onClose();
            nav(`editcontent/${itemId}`)}
          }>수정</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    );
  };

  export default Modal;