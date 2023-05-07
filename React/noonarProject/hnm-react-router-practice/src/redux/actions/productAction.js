import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery){
    return  async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/dbfla6302/HNM-React/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch( productActions.getAllProduct( {data} ) );
    }
}

export const productAction = { getProducts };