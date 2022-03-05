import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';

import { Link } from 'react-router-dom';
export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size="38" color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="links-itens">
        <button className="link">
          <FiLink size="18" color="#fff" />
          http/dasdadad
        </button>
        <button className="lixeira">
          <FiTrash size="24" color="#ff5454" />
        </button>
      </div>
      <div className="links-itens">
        <button className="link">
          <FiLink size="18" color="#fff" />
          http/dasdadadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </button>
        <button className="lixeira">
          <FiTrash size="24" color="#ff5454" />
        </button>
      </div>

    </div>
  )
}