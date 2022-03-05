import './menu.css';
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://www.instagram.com/junioraraujo01/" >
                <BsInstagram color="#fff" size="24"/>
            </a>
            <a className="social" href="https://www.linkedin.com/in/edivaldo-j%C3%BAnior-9a67391bb/" >
                <BsLinkedin color="#fff" size="24"/>
            </a>
            <Link className="menu-item" to="/links">
            Meus Links
            </Link>
        </div>
    )
}