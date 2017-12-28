import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';
import ListaCartao from './cartao/lista-cartao';

let App = (
    <div className="container">
        <Navbar titulo="React do Caio" cor="green" />
        <Titulo />
        
        <ListaCartao qtdCartaoPorLinha="4" tamanhoGridColuna="3" />
    </div>
);

ReactDOM.render(
  App, document.getElementById('app')
);
