import Header from "./components/Header";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./components/Alert";

function App() {

  //Update state
  const [ productsUpdate, setProductsUpdate ] = useState(null)

  const [ products, setProducts ] = useState([]);

  //Read
  //Obtener el endpoid que tiene el listado de products
  useEffect( () => {
    getProducts()
  }, [])
  
  const getProducts = () => {
    axios
      .get(`https://products-crud.academlo.tech/products/`)
      .then(resp => setProducts(resp.data))
      .catch(error => console.log(error))
  }

  //CREATE
  const addProducts = productsData => {
    axios
      .post(`https://products-crud.academlo.tech/products/`, productsData)
      .then( () => getProducts())
      .catch(error => console.error(error))
  }

  //DELETE
  const deleteProducts = (idProduct) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${idProduct}/`)
      .then( () => getProducts())
      .catch(error => console.error(error))
  }

  
  //UPDATE
  const selectProducts = productsData => {
    setProductsUpdate(productsData);
  }

  const productsActualization = (productsData) => {
    axios
      .put(`https://products-crud.academlo.tech/products/${productsData.id}/`, productsData)
      .then( () => {
        getProducts()
        //Vaciar el formulario
        setProductsUpdate(null)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">

        <ProductsForm 
          createProducts={(data) => addProducts(data)}
          selectedProducts={productsUpdate}
          updateProducts={data => productsActualization(data)}
        />

        <ProductsList
          productsData={products}
          deleteProductsAction={id => deleteProducts(id)}
          selectProducts={data => selectProducts(data)}
        />
      </div>
    </div>
  );
}

export default App
