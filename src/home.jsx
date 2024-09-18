import Header from './Header';
import Footer from './Footer';
import CatalagoProduto from './CatalogoProduto';
import ItemCamisa from "./ItemCamisa";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import Carrosel1 from './img/Puma.jpg'
import Carrosel2 from './img/Bape.jpg'
import Carrosel3 from './img/Adidas.jpg'


const Home = ({produtos}) => {

return(
    <>
    <Header/>
    <Carousel className='carousel-home'>
      <Carousel.Item interval={1500}>
        <img className='CarroselTeste' src={Carrosel1}></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='CarroselTeste' src={Carrosel2}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='CarroselTeste' src={Carrosel3}></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <CatalagoProduto  nomes={produtos}/>
    <h2 className="azulhome"></h2>
    <p className='letreiroHomeVejaMais'>VEJA MAIS</p>
    <Footer/>

    </>
)
}
export default Home