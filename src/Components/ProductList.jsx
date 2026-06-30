// ===========================================
// ProductList.jsx
// Muestra la lista de productos registrados.
// ===========================================

import ProductCard from "./ProductCard";

function ProductList({ products, deleteProduct, editProduct }) {

    // Renderiza todos los productos disponibles
    return (
        <div className="product-list">

            <h2>Productos Registrados</h2>

            {products.length === 0 ? (
                <p>No hay productos registrados.</p>
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        deleteProduct={deleteProduct}
                        editProduct={editProduct}
                    />
                ))
            )}

        </div>
    );
}

export default ProductList;