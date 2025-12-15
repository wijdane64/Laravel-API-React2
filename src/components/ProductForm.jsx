import { useEffect, useState } from 'react';
import { createProduct, updateProduct } from '../api/productApi';

export default function ProductForm({ fetchProducts, editingProduct, setEditingProduct }) {
  const [form, setForm] = useState({ name: '', description: '', price: '', quantity: '' });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await updateProduct(editingProduct.id, form);
      setEditingProduct(null);
    } else {
      await createProduct(form);
    }
    setForm({ name: '', description: '', price: '', quantity: '' });
    fetchProducts();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 border rounded  p-4">
      <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} className="border p-1 mr-2"/>
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-1 mr-2"/>
      <input type="number" name="price" placeholder="Prix" value={form.price} onChange={handleChange} className="border p-1 mr-2"/>
      <input type="number" name="quantity" placeholder="Quantité" value={form.quantity} onChange={handleChange} className="border p-1 mr-2"/>
      <button type="submit" className="bg-blue-500 rounded text-white px-2 py-1">{editingProduct ? 'Update' : 'Add'}</button>
    </form>
  );
}
