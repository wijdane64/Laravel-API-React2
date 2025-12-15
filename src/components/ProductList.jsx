import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/productApi';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des produits</h1>
      <ProductForm fetchProducts={fetchProducts} editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
   <ul>
  {products.map((p) => (
    <ProductItem
      key={p.id}
      product={p}
      onEdit={setEditingProduct} // déclenche la modification
      onDelete={handleDelete}   // déclenche la suppression
    />
  ))}
</ul>
    </div>
  );
}
