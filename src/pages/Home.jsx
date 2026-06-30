// ===============================
// Home.jsx
// Página principal del sistema.
// Administra el estado de los productos y la lógica del CRUD.
// ===============================

// Importación de componentes
import Navbar from "../components/Navbar";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

// Importación de Hooks de React
import { useState, useEffect } from "react";

function Home() {

    // ===============================
    // Estados principales de la aplicación
    // ===============================

    // Lista de productos
    const [products, setProducts] = useState([]);

    // Producto seleccionado para editar
    const [editingProduct, setEditingProduct] = useState(null);

    // Texto del buscador
    const [search, setSearch] = useState("");

    // ===============================
    // Cargar los productos almacenados
    // desde LocalStorage al iniciar
    // ===============================
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("products"));

        if (data) {
            setProducts(data);
        }
    }, []);

    // ===============================
    // Guardar automáticamente los cambios
    // en LocalStorage
    // ===============================
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    // ===============================
    // Agregar un nuevo producto
    // ===============================
    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    // ===============================
    // Eliminar un producto por su ID
    // ===============================
    const deleteProduct = (id) => {

        const confirmDelete = window.confirm(
            "¿Está seguro de eliminar este producto?"
        );

        if (confirmDelete) {
            setProducts(products.filter((product) => product.id !== id));
        }

    };

    // ===============================
    // Seleccionar un producto para editar
    // ===============================
    const editProduct = (product) => {
        setEditingProduct(product);
    };

    // ===============================
    // Actualizar la información de un producto
    // ===============================
    const updateProduct = (updatedProduct) => {

        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );

        setProducts(updatedProducts);
        setEditingProduct(null);
    };

    // ===============================
    // Filtrar productos por nombre
    // ===============================
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    // ===============================
    // Interfaz principal del sistema
    // ===============================
    return (
        <>
            <Navbar />

            <div className="container">

                <ProductForm
                    addProduct={addProduct}
                    editingProduct={editingProduct}
                    updateProduct={updateProduct}
                />

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <ProductList
                    products={filteredProducts}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                />

            </div>
        </>
    );
}

export default Home;