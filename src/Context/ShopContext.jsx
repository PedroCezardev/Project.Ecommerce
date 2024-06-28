import PropTypes from 'prop-types';
import { createContext } from 'react'
import all_product from '../assets/all_product';

// estamos criando um novo contexto com o valor inicial null
export const ShopContext = createContext(null);
// shopContext recebe uma prop como argumento, propriedades 
// passadas para este componente

// este é um componente provedor do shopContext
const ShopContextProvider = (props) => {
    
    // contextValue é um objeto que contém all product
    // este objeto sera compartilhado com todos comp. que consumirem o shopContext
    const contextValue = {all_product};

    return(
        // o comp. retorna um shopcontextprovider com o valor contextvalue
        // todos os componentes filhos terão acesso ao valor do contexto contextValue
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

// define as proptypes para o componente
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
// Protypes.node: valida qualquer coisa que pode ser renderizada
// IsRequired: marca a propriedade como obrigatoria, se a propriedade
// não for passada, o React emitirá um aviso.

export default ShopContextProvider;

// O Contexto é usado para compartilhar dados globalmente em uma 
// árvore de componentes sem a necessidade de passar props 
// manualmente em cada nível.