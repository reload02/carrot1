import './DelModal.css'
import { useContext,useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemDatasContext } from '../App';
import Loader from './Loader';


const Modal = ({ isOpen, onClose ,itemId}) => {

    useEffect(() => {
        // 데이터 로드 시뮬레이션 (3초 대기)
        const fetchData = async () => {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        };
        fetchData();
      }, []);

     const {items,setItems} = useContext(itemDatasContext);
     const [loading, setLoading] = useState(true);
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
            {loading ? <Loader /> : <div>Main Content</div>}
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