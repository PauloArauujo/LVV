import './App.css';
import CatalagoProduto from './CatalogoProduto';
import Header from './Header';
import Footer from './Footer';
import ExibeProduto from './ExibeProduto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCamisa from "./ItemCamisa";
import Cadastro from './Cadastro';
import Login from "./Login";
import produtos from './Services';
import Pagamento from './Pagamento';
import Home from './home';

function App() {
    const nomesProdutos = ['Camisa Preta', 'Camisa branca','Camisa azul','Camisa Preta',]


    const rotas = createBrowserRouter([
        {
          path: '/',
          element: <Home produtos={nomesProdutos}/>
        },
        {
          path: '/seach',
          element: <ExibeProduto catalago={produtos}/>
       },
        {
            path: '/:nome',
            element: <ExibeProduto catalago={produtos}/>
          },
          {
            path: '/login',
            element: <Login/>
          },
          {
            path: '/cadastro',
            element: <Cadastro/>
          },
          {
            path: '/pagamento',
            element: <Pagamento/>
          }
      ])

    return (
        <>
        <RouterProvider router={rotas}/>
        </>
    )
}
export default App;