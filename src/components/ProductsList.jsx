

const ProductsList = ({productsData, deleteProductsAction, selectProducts}) => {
 
    const confirmDelete = (id) => {
        const resultConfirm = confirm('¿Estás seguro de que deseas eliminar este producto?"')
        if (resultConfirm) {
            deleteProductsAction(id)
        }
    }

    return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className="font-black text-3xl text-center">Listado de productos</h2>
      <p className="text-lx mt-3 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Productos</span>
      </p>

            {
                productsData?.map(product => (
                    <div key={product.id} className="mx-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">
                        <div>
                            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                                <span className="font-normal normal-case">{product?.name}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">Categoría: {""}
                                <span className="font-normal normal-case">{product?.category}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">Precio: {""}
                                <span className="font-normal normal-case">S/.{product?.price}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">Disponibilidad: {""}
                                <span className="font-normal normal-case">{(product?.isAvailable) ? 'True' : 'False'}</span>
                            </p>

                            <div className="flex justify-between mt-10 mb-10">
                                <button 
                                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                                    type="button"
                                    onClick={() => selectProducts(product)}
                                    >
                                    Editar
                                </button>
                                <button 
                                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                                    type="button"
                                    id="eliminar"
                                    onClick={() => confirmDelete(product.id)}
                                    >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default ProductsList

