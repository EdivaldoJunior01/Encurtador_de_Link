import { FiLink } from 'react-icons/fi';
import './home.css';
import { useState } from 'react';

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import {saveLink} from '../../services/storeLink'

export default function Home() {
const [link, setLink] = useState('');
const [showModal, setShowModal] = useState(false);
const [data, setData] = useState({});
async function handleShortLink(){

    try{
        const response = await api.post('/shorten',{
            long_url: link 
        }) 
        setData(response.data);
        setShowModal(true);

        saveLink('@chavelink', response.data);

        setLink('');//limpar campo
    }catch{
        alert('Ops Algo deu errado! :( ')
        setLink('');//apos da o erro limpa o campo
    }
    
}
    return (
        <div className="container-home">

            <div className="logo">
                <img src="/link.png" alt="Link logo" />
                <h1>Encurtador de Link</h1>
                <span>Adicione ou cole um link para encurtar 👇 </span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff"/>{/*icone link */}
                    <input 
                    placeholder="Cole seu link aqui..."
                    value={link}
                    onChange={ (e)=> setLink(e.target.value) }
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>
        <Menu/>
        { showModal && ( /* se showmodal for true ele renderizarar */
            <LinkItem
            closeModal={ () => setShowModal(false)} /* alerando para false para fechar a o modal quando clicar no x */
            content={data}
            />
        )}
        </div>
    )
}