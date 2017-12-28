import React from 'react';
import axios from 'axios'; // para buscar no servidor axios

import Cartao from './cartao';
import LinhaCartao from './linha-cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            qtdCliques: 0,
            busca: '',
            noticiasServidor: [],
            noticias: []
        };

        // dentro da funcao atualizar busca eu estou passando o contexto de this para ser usado.
        this.atualizarBusca = this.atualizarBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        let self = this;  // recupera o this para usar no escopo global desta função.
          // realizando uma requisicao ajax com axio passando a url como param.
        axios.get('http://localhost:3000/servidor.php?dados=1').then(function(resposta){
            self.setState({
                noticias: resposta.data,
                noticiasServidor: resposta.data
            });
        });
    }

    addClique(){
        this.setState({ qtdCliques: this.state.qtdCliques + 1 });
    }

    atualizarBusca(evento){
        let busca = evento.target.value;

        this.setState({
            busca: busca
        });

        if(!busca){ // se o campo de busca estiver vazio  preenche com todos os cards
            this.setState({
                noticias: this.state.noticiasServidor
            });
        }
    }

    onSubmit(evento){
        let busca = this.state.busca;
        let noticias = this.state.noticiasServidor;

        //cria uma lista  baseada no filtro que passamos no campo de busca.
        let novaLista = noticias.filter(function(noticia){
            if(noticia.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
               noticia.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
               noticia.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
                return noticia;
            }
        });

        this.setState({
            noticias: novaLista
        });
                
        evento.preventDefault();
    }

    render(){
        let noticias = this.state.noticias; //recuperando o array de noticias.

        //Criando um novo array, separando os objetos pela quantidade que será exibida em cada linha.
        //na tela. Por exemplo  colocar 4 cartoes por linha, ou 3 cartões por linha.
        let aux = [];  // vetor que irá separar os grupos.
        let novaLista = [];  // vetor que irá guardar o vetor de cada grupo.

        for(let i = 0; i < noticias.length; i++){
            aux.push(noticias[i]);  //inserindo cada objeto no vetor.

            //se o array aux tem 4 cartoes, a novaLista guarda o grupo. novaLista é um array  de arrays.
            if(aux.length == this.props.qtdCartaoPorLinha ){ // qtdCartaoPorLinha -> arquivo cartao.jsx
                novaLista.push(aux);
                aux = [];
                //se chegar no último cartao e aux nao preencher 4 no grupo,
                //o último grupo que está dentro de aux é inserido na nova lista tbm.
            }   else if(i == noticias.length - 1){
                    novaLista.push(aux);
                }
        }

        let tamanhoGridMaterializeColuna = "col m" + this.props.tamanhoGridColuna;
        let tamanhoColunaGrid = this.props.tamanhoGridColuna;  // teste do novo componente

        let self = this;

        //esse map percorre o vetor de vetores e devolve um vetor em cada iteração
        //para cada iteracao ele passa o vetor para o componente LinhaCartao e lá
        //nesse componente ele itera esse vetor passado como parametro e cria as linhas e colunas.
        let linhasDeCartoes = novaLista.map(function(vetorCartoes, index){
            return(
              <LinhaCartao key={ index } grupoCartoes={ vetorCartoes } tamanhoColuna={ tamanhoColunaGrid } addClique={ self } />
            );
        });

        return(
            <div>
                <div className="row">
                    <Busca atualizarBusca={ this.atualizarBusca } busca={ this.state.busca } onSubmit={ this.onSubmit } />
                </div>
                <p>N° de cliques: { this.state.qtdCliques } </p>
                { linhasDeCartoes }
            </div>
        );
    }
}

export default ListaCartao;
