import React from 'react';

class NavMenu extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            menuAtivo: 'Home'
        }
    }

    render(){
        let ativo = this;  // pega a instância do state do componente pois dentro do map
                           // ele perde essa referencia do this.

        // recebendo o props que foi passado por parâmetro na tag NavMenu no arquivo navbar.jsx
        let lista = this.props.menu;

        lista = lista.map(function(itemMenu, index){            
            return(
                <li key={ index } className={ ativo.state.menuAtivo == itemMenu.titulo ? 'active' : '' }
                                  onClick={ () => ativo.setState({ menuAtivo: itemMenu.titulo }) } >

                    <a href={ itemMenu.link }> {itemMenu.titulo} </a>
                </li>
            );
        });

        return(
            <ul id="nav-mobile" className="right" >
                { lista }
            </ul>
        );
    }
}

export default NavMenu;
