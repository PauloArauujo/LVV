import logo from './img/lglv.png';
import Login from './Login';
import Cadastro from './Cadastro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';



const Header = ({links = true}) => {
    const [mostraPesquisa, setmostraPesquisa] = useState(true);
    return(
        <div className='ContainerHeader'>
        <div className='header'>
            <img src={logo}/>
            <div className='anu'>
            {mostraPesquisa? <input className='barra' type="barraDePesquisa" placeholder="Pesquisa" /> : <></>}
                <div className='azul'></div>
                <div className='cinza'/>
            </div>
            <div className='iconLupa'>
            <button className = "pesquisa" onClick={()=> setmostraPesquisa(!mostraPesquisa)} >
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/> 
            </button>
            </div>
            <div className='anu1'>
                <div className='azul1'/>
                <div className='cinza1'/>
            </div>
            <div className='iconLupa'>
            <Link to={`/buy`}><FontAwesomeIcon icon={faCartShopping} className='icon'/></Link>
            </div>
                <div className='anu1'>
                <div className='azul1'/>
                <div className='cinza1'/>
            </div>
            <div className='iconLupa'>
                 <Dropdown>
                <Dropdown.Toggle>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href='/Login'>Login</Dropdown.Item>
                <Dropdown.Item href='/Cadastro'>Cadastro</Dropdown.Item>
                <Dropdown.Item href='/perfil'>Menu Item</Dropdown.Item>
                </Dropdown.Menu> 
            </Dropdown>
            </div>
            <div className='anu1'>
                <div className='azul1'/>
                <div className='cinza1'/>
            </div>
        </div>
        {links ? 
        <div className='links'>
        <nav className='link'>
            <Link to="#">LANÇAMENTOS</Link>
            <Link to="#">OFERTAS</Link>
            <Link to="#">MASCULINO</Link>
            <Link to="#">FEMININO</Link>
        </nav>
        </div>
        : <></>} 
         
     </div>
    )
}
export default Header;