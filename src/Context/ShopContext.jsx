import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

// estamos criando um novo contexto com o valor inicial null
export const ShopContext = createContext(null);
// shopContext recebe uma prop como argumento, propriedades 
// passadas para este componente

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < 300+1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

// este é um componente provedor do shopContext
const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const [cartItems,setCartItms] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => setAll_Product(data))
    },[])
    
    const addToCart = (itemId) => {
        setCartItms((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) => {
        setCartItms((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems =() => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    // contextValue é um objeto que contém all product
    // este objeto sera compartilhado com todos comp. que consumirem o shopContext
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};

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