// ===========================================
// ProductCard.jsx
// Muestra la información de un producto
// y permite editarlo o eliminarlo.
// ===========================================

function ProductCard({ product, deleteProduct, editProduct }) {

    // Tarjeta con la información del producto
    return (
        <div className="product-card">

            <h3>{product.name}</h3>

            <p>
                <strong>Precio:</strong> ${product.price}
            </p>

            <p>
                <strong>Cantidad:</strong> {product.quantity}
            </p>

            <p>
                <strong>Descripción:</strong> {product.description}
            </p>

            <div className="buttons">

                <button
                    className="edit-btn"
                    onClick={() => editProduct(product)}
                >
                    Editar
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product.id)}
                >
                    Eliminar
                </button>

            </div>

        </div>
    );
}

export default ProductCard;