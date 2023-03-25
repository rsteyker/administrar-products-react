

const Products = ({productsData, deleteProductsAction, selectProducts}) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">
        <div>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{productsData?.name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Categoría: {""}
                <span className="font-normal normal-case">Artefactos</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Precio: {""}
                <span className="font-normal normal-case">S/1200.00</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Disponibilidad: {""}
                <span className="font-normal normal-case">True</span>
            </p>
        </div>
    </div>
  )
}

export default Products
