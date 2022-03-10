import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi'
export default function LinkItem({closeModal, content}) {
    
   async function copylink(){
    await navigator.clipboard.writeText(content.link);
    alert('LINK COPIADO COM SUCESSO!')
}
    
    return (
        <div className="modal-container">

            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size="28" color="#000" />
                </button>
            </div>

            <span>
               {content.long_url}
               {/* long_url e link fica dentro do obj data da API */}
            </span>
            <button className="modal-link" onClick={copylink}>
                {content.link}
                <FiClipboard size="28" color="#fff"/>
            </button>

        </div>
    )
}