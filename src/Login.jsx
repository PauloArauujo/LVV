import Footer from './Footer';
import Header from './Header';
import Cadastro from './Cadastro';
import { Link } from 'react-router-dom';
import {useParams } from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./App.css";

const Login = () => {

    const [username, setUsername] = useState("Teste");
    const [password, setPassword] = useState("Teste");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        console.log("Envio"); 'Envio'
    };


return <>
    <Header links = {false}/>
    <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
            <div className="email">
                <div className='iconemail'>
                <FontAwesomeIcon icon={faUser}/>
            </div>
                <input type="email" placeholder="Email" class='inputs' 
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="password">
            <div className='iconsenha'>
                <FontAwesomeIcon icon={faLock}/>
            </div>
                <input type="password" placeholder="Senha"  class='inputs' 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='recall'>
                <label>
                    <input type="checkbox" className='checkmimm'/><a>LEMBRE DE MIM</a>
                    <a className='espacologin'></a>
                </label>
                    <a href="#" className='checksenha'>ESQUECI MINHA SENHA</a>
                    <a className='espacologin'></a>
                    <a href="#" className='checkcolaborador'>SOU UM COLABORADOR</a>
            </div>
                <button className='btnentrar'><Link to={'/'}>Entrar</Link></button>
            <div className="signup-link">
                <p className='checkcadastro'>NÃO TEM UMA CONTA?<Link to={'/cadastro'}> CADASTRA-SE</Link></p>
            </div>
            </form>
        </div>
    <Footer/>
    </>
};

export default Login;






