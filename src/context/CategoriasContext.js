import React, { Component } from 'react';
import axios from 'axios';

//Crear context

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;



class CategoriasProvider extends Component {

    token = 'GCTPFBMMCS45AEO2M2';
    token1 = 'HTAW6NMPXD2FFIUQAXCI';

    state = { 
        categorias : []
     }

    componentDidMount(){
        this.ObtenerCategorias();
    }

    ObtenerCategorias = async () => {
        let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token1}&locale=es_ES`

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.categories
        })
    }

    render() {
        return (
            <CategoriasContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;