import React from 'react';

class Cartao extends React.Component{

    contaCliques(somaCliques){
        somaCliques.props.contaCliques.props.addClique.addClique();
    }

    render(){
        let somaCliques = this;

        return(
          <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={ this.props.cartao.imagem }
                       onClick={ () => this.contaCliques(somaCliques) }
                  />
              </div>

              <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{ this.props.cartao.titulo }<i className="material-icons right">more_vert</i></span>
                  <p> { this.props.cartao.descricao } </p>
              </div>

              <div className="card-action">
                  <a href="#">Ver Mais ...</a>
              </div>

              <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Título<i className="material-icons right">close</i></span>
                  <p> { this.props.cartao.detalhe } </p>
                  <p>Aqui estão algumas informações a mais sobre esse produto que está apenas sendo mostrado na tela.</p>
              </div>
          </div>
        );
    }
}

export default Cartao;
