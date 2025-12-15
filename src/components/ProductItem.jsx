import React from 'react';

export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <li className="border p-2 my-2 flex justify-between items-center rounded shadow hover:bg-gray-50 transition">
      <div>
        <strong className="text-lg">{product.name}</strong> - {product.price} € - Qté: {product.quantity}
        {product.description && <p className="text-gray-500">{product.description}</p>}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
