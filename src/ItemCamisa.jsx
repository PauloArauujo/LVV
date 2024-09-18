import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCamisa = ({imagem, valor, nome}) => {
const [fav, setFav] = useState();

const handleFavClick = () => {
    const newFav = !fav;
    setFav(newFav);
}
    return (
            <div className="cubo">
            <Link to={`/${nome}`}>
                <div className="quadrado">
                    <img src={imagem}/>
                        <div className="quadradoValor">
                            <p className='valor'>{valor}</p>
                        </div>
                </div>
            </Link>
            <div className='DescProduto'>
            <p>{`${nome}`}</p>
            <Link to={`/${nome}`}><FontAwesomeIcon icon={faPlus} className='iconProduto'></FontAwesomeIcon></Link>
                {
                    fav == true 
                 ? <FontAwesomeIcon icon={faHeartSolid} className='iconProduto' onClick={handleFavClick}/>
                 : <FontAwesomeIcon icon={faHeartRegular} className='iconProduto' onClick={handleFavClick}/>
                }

            </div>
        </div>
    )
}
export default ItemCamisa;