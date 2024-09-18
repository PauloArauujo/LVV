import Header from './Header';
import Footer from "./Footer";
import Pagamento from './Pagamento';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import logo from './img/lglv.png';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';

const ExibeProduto =({catalago,name, ...props}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nomePath = useParams();
    const buscaProduto = catalago.find(produto => produto.nome == nomePath.nome);

    return(
        <>
        <Header/>
        <div className="exibe">   
                <div className="ExibeQuadrado">
                    <img src={buscaProduto.img} alt={catalago.nome}/>
                </div>
            <div className="exibe-produto-desc">
                <a className="buycompras">{buscaProduto.nome}</a>
        <div className="estrelas">
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarHalfStroke} />
        <div className="espaco"></div>
            <a className="buyPreco">{buscaProduto.valor}</a>
        </div> 
            <div className="espaco"></div>
            <div className='linhaazul'></div>
                <h3 className="cor">ESCOLHA A COR:</h3>
            <div className="cores">
                <button className= "btnCor1"></button>
                <button className= "btnCor2"></button>
                <button className= "btnCor3"></button>
            </div>
            <div className='linhaazul'></div>
                <h3 className="tamanho">TAMANHOS:</h3>
                <div className="tamanhos">
                <button className= "btnTamanhos"><h5 className="p">P</h5></button> 
                <button className= "btnTamanhos"><h5 className="m">M</h5> </button>
                <button className= "btnTamanhos"><h5 className="g">G</h5> </button>
                <button className= "btnTamanhos"><h5 className="gg">GG</h5></button>
                </div>
                <div className="finalizar">



                    <div className='Pagamento'>
                <Button onClick={handleShow} className="btn-primary"><h2>COMPRAR</h2></Button>

                    <Offcanvas show={show} onHide={handleClose} {...props} placement={'end'}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Pagamento</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="logoPg"> <img src={logo}/></div>
                        <div className='quadradoPagamento'>
                            <img src={buscaProduto.img} alt={catalago.nome}/>
                        </div>
                        <div className='excibe-pagamento'>
                            <a className="nomePagamento">{buscaProduto.nome}</a>
                        </div>
                        <div className="estrelas">
                            <FontAwesomeIcon icon={faStarSolid}/>
                            <FontAwesomeIcon icon={faStarSolid}/>
                            <FontAwesomeIcon icon={faStarSolid}/>
                            <FontAwesomeIcon icon={faStarSolid}/>
                            <FontAwesomeIcon icon={faStarHalfStroke} />
                        <div className="espacoPagamento"></div>
                            <a className="pagamentoPreco">{buscaProduto.valor}</a>
                        </div>
                        <div className='linhaPagamento'></div>
                        <div className='formasPagamento'>
                        <div className='boleto'><h5>Boleto</h5> <input type="checkbox" /></div>
                        <div className='linhaPagamento'></div>
                        <div className='pix'><h5>Pix</h5> <input type="checkbox" /></div>
                        <div className='linhaPagamento'></div>
                        <Accordion>
                        <div className='cartaoDebito'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Cartão de Débito</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            </div>
                            <div className='cartaoCredito'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Cartão de Crédito</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        </Accordion>
                        </div>
                                <button onClick={handleShow} className='pagar'><h3>PAGAR</h3></button>
                        </Offcanvas.Body>
                    </Offcanvas>
                    </div>


                    
                    <div className="iconsCompra"> 
                        <FontAwesomeIcon icon={faCirclePlus} className="iconCompra" />
                        <FontAwesomeIcon icon={faShareNodes} className="iconCompra1"/>
                    </div>
                </div>
            </div>
        </div>  
        <Footer/>
        </>
    )
}

export default ExibeProduto;
