// ===========================================
// ProductForm.jsx
// Componente encargado de registrar y editar
// productos dentro del sistema.
// ===========================================

import { useState, useEffect } from "react";

function ProductForm({ addProduct, editingProduct, updateProduct }) {

    // ===========================================
    // Estado del formulario
    // ===========================================
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        quantity: "",
        description: "",
    });

    // ===========================================
    // Carga la información cuando se edita
    // un producto existente
    // ===========================================
    useEffect(() => {
        if (editingProduct) {
            setProduct(editingProduct);
        }
    }, [editingProduct]);

    // ===========================================
    // Actualiza los campos del formulario
    // ===========================================
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    // ===========================================
    // Procesa el envío del formulario
    // para registrar o actualizar productos
    // ===========================================
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            product.name === "" ||
            product.price === "" ||
            product.quantity === ""
        ) {
            alert("Complete todos los campos obligatorios");
            return;
        }

        if (editingProduct) {
            updateProduct(product);
        } else {
            addProduct({
                ...product,
                id: Date.now(),
            });
        }

        // Limpia el formulario
        setProduct({
            id: "",
            name: "",
            price: "",
            quantity: "",
            description: "",
        });
    };

    // ===========================================
    // Formulario principal
    // ===========================================
    return (
        <div className="card">

            <h2>
                {editingProduct ? "Editar Producto" : "Registrar Producto"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={product.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Precio"
                    value={product.price}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Cantidad"
                    value={product.quantity}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Descripción"
                    value={product.description}
                    onChange={handleChange}
                ></textarea>

                <button>
                    {editingProduct ? "Actualizar Producto" : "Guardar Producto"}
                </button>

            </form>

        </div>
    );
}

export default ProductForm;