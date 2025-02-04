import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 12000000, category: "Elektronik" },
  { id: 2, name: "Smartphone", price: 5000000, category: "Elektronik" },
  { id: 3, name: "Meja", price: 1500000, category: "Furniture" },
  { id: 4, name: "Kursi", price: 750000, category: "Furniture" },
  { id: 5, name: "Kipas Angin", price: 300000, category: "Elektronik" },
];

const categories = ["Semua", "Elektronik", "Furniture"];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory === "Semua" || product.category === selectedCategory);
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
      <input type="text" placeholder="Cari produk..." className="border p-2 w-full mb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <select className="border p-2 w-full mb-4" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="border p-2 mb-2">
              <h3 className="font-semibold">{product.name}</h3>
              <p>Harga: Rp{product.price.toLocaleString()}</p>
              <p>Kategori: {product.category}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada produk yang ditemukan.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
