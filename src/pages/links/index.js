import { useEffect, useState } from 'react';

import './links.css'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import {getLinkSave, deleLink} from '../../services/storeLink'
import LinkItem from '../../components/LinkItem'

import { Link } from 'react-router-dom';
export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [listavazia, setListaVazia] = useState(false);

  useEffect(()=> {
    async function getLinks(){
      const result = await getLinkSave('@chavelink')

      if (result.length === 0 ) {
        //lista vazia..
        setListaVazia(true)
      }
      setMyLinks(result);
    }
    getLinks();
  }, [])

  function handleOpenLink(link){
    setData(link);
    setShowModal(true); //caixa com o link
  }
  async function handleDelete(id) {
    const result =  await deleLink(myLinks, id)
    
    if(result.length === 0){
      console.log('voce não tem links')
      setListaVazia(true)//se não tiver nenhum link
    }

    setMyLinks(result);
  }
 
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size="38" color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {listavazia && (
        <div className="links-">
          <h2 className="lista-text">Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map (link =>(

            <div key={link.id} className="links-itens">
            <button className="link" onClick={() => handleOpenLink(link)}>
              <FiLink size="18" color="#fff" />
              {link.long_url}
            </button>
            <button className="lixeira" onClick={() => handleDelete(link.id)}>
              <FiTrash size="24" color="#ff5454" />
            </button>
          </div>
      ))}

      {showModal && (
        <LinkItem
          closeModal={() =>setShowModal(false)}
          content={data}
        />
      )}
    </div>
  )
}