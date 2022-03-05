import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu'

export default function Home() {
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
                    type="text" 
                    placeholder="Cole seu link aqui..."/>
                </div>
                <button>Encurtar Link</button>
            </div>
        <Menu/>
        </div>
    )
}