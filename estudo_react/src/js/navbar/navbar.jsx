import React from 'react';
import axios from 'axios';

import NavMenu from './nav-menu';

class Navbar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            menu: []
        };
    }


    componentDidMount(){
        let self = this;  // recupera o this para usar no escopo global desta função.

        // realizando uma requisicao ajax com axios passando a url como param.
        axios.get('http://localhost:3000/servidor.php?menu=1').then(function(resposta){
            self.setState({
                menu: resposta.data
            });
        });
    }

    render(){
        let menu = this.state.menu;

        // essa let  é a que vai trocar as classes da tag de forma dinâmica. Está trocando a cor.
        let corNav = "nav-wrapper "+this.props.cor;
        return(
            <nav>
                <div className={ corNav }>
                    <div className="container">
                        <a href="#" className="brand-logo"> {this.props.titulo} </a>

                        <NavMenu menu={ menu } />
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;
