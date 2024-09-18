import ItemCamisa from "./ItemCamisa";
import Camisa1 from './img/camisatd.png';
import Camisa2 from './img/camisatd1.png';
import Camisa3 from './img/camisatd2.png';
import Camisa4 from './img/camisatd3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import produtos from './Services';

const CatalagoProduto = ({nomes, }) => {
    if (!Array.isArray(nomes) || nomes.length <4){
        return null
    }
    return (
        <>
        <div className='section-itens'>
            {
                produtos.map((i) => 
                <ItemCamisa nome = {i.nome} imagem={i.img} valor={i.valor} />
                )
            }
        </div>
        </>
    )
}

export default CatalagoProduto;