import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';

const ProductsForm = ({createProducts,  selectedProducts, updateProducts}) => {
    //Use form
    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    
    useEffect(() => {
        //Determinar si hay un usuario seleccionado
        if (selectedProducts) {
            reset(selectedProducts);
        }else{
            //Si lo hay se carga su info
            emptyForm()
        }
    }, [selectedProducts])
    
    
    const submit = data => {
        if (selectedProducts) {
            updateProducts(data);
        }else{
            //Sacar objeto data
            createProducts(data);
            //Si el envío de información ocurre con éxito
            emptyForm()
        }
    }

    //Limpieza de formulario
    const emptyForm = () => {
        reset(
            {
                name:'',
                category:'',
                price:'',
                isAvailable:(false)
            }
        )
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Productos</h2>
      <p className="text-lx mt-3 text-center mb-10">
        Añade productos y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit(submit)} className="bg-white shadow-lg rounded-xl py-10 px-5 mb-10">
        <div className="mb-5">
            <label className="block text-gray-700 uppercase" htmlFor="name">Nombre</label>
            <input
                className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Nombre del producto"
                {...register('name', {required: true})}
            />
            {
              errors.name?.type === 'required' && <p 
              style={{background:'red', color:'white', padding:'5px', width:'100%', marginBottom:'10px', marginTop: '10px', borderRadius:'.5rem', textAlign:'center'}} 
              role="alert">El campo nombre es obligatorio</p>
            }
        </div>
        <div className="mb-5">
            <label className="block text-gray-700 uppercase" htmlFor="category">Categoría</label>
            <input
                className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
                type="text"
                id="category"
                name="category"
                placeholder="Ingrese categoría"
                {...register('category', {required: true})}
            />
            {
              errors.category?.type === 'required' && <p 
              style={{background:'red', color:'white', padding:'5px', width:'100%', marginBottom:'10px', marginTop: '10px', borderRadius:'.5rem', textAlign:'center'}} 
              role="alert">El campo categoría es obligatorio</p>
            }
        </div>
        <div className="mb-5">
            <label className="block text-gray-700 uppercase" htmlFor="price">Precio</label>
            <input
                className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
                type="number"
                id="price"
                name="price"
                min="1"
                placeholder="Ingrese precio"
                {...register('price', {required: true})}
            />
            {
              errors.price?.type === 'required' && <p 
              style={{background:'red', color:'white', padding:'5px', width:'100%', marginBottom:'10px', marginTop: '10px', borderRadius:'.5rem', textAlign:'center'}} 
              role="alert">El campo precio es obligatorio</p>
            }
        </div>
        <div className="mb-5">
            <label className="block text-gray-700 uppercase" htmlFor="isAvailable">Disponibilidad</label>
            <input
                className="p-2 mt-2"
                type="checkbox"
                id="isAvailable"
                name="isAvailable"
                {...register('isAvailable')}
            />
        </div>
        <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 transition-all"
            value="Agregar Producto"
        />
      </form>
    </div>
  )
}

export default ProductsForm
