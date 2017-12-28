import React from 'react';

import Cartao from './cartao';

class LinhaCartao extends React.Component{

    render(){
            //let array que recebe cada grupo de cartões que irão preencher uma linha na tela.
        let linhaCartoes = this.props.grupoCartoes;
        let tamanhoGridMaterializeColuna = "col m" + this.props.tamanhoColuna;

        let addClique = this; // essa props vem do arquio lista-cartao.jsx

        let linhaDeCartoesConcluida = linhaCartoes.map(function(cartaoDaLinha){
            return(
                <div key={ cartaoDaLinha.titulo } className={ tamanhoGridMaterializeColuna } >
                    <Cartao cartao={ cartaoDaLinha } contaCliques={ addClique } />
                </div>
            );
        });

        return(
            <div className="row">
                { linhaDeCartoesConcluida }
            </div>
        );
    }
}

export default LinhaCartao;
