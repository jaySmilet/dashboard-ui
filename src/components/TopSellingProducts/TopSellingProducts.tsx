import React from "react";

const TopSellingProducts = () => {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
  ];
  return (
    <div className="flex flex-col gap-1 p-6 rounded-lg bg-[var(--primary-light)]">
      <span className="font-semibold text-sm text-[var(--text-strong)]">
        Revenue By Location
      </span>

      <table className="min-w-full rounded-lg">
        <thead className="font-normal text-xs text-[var(--text-medium)] border-b [border-color:rgba(28,28,28,0.2)]">
          <tr>
            <th className="py-2 px-3 text-left">Name</th>
            <th className="py-2 px-3 text-left">Price</th>
            <th className="py-2 px-3 text-left">Quantity</th>
            <th className="py-2 px-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="font-normal text-xs text-[var(--text-strong)] hover:bg-gray-50"
            >
              <td className="py-2 px-3">{product.name}</td>
              <td className="py-2 px-3">${product.price.toFixed(2)}</td>
              <td className="py-2 px-3">{product.quantity}</td>
              <td className="py-2 px-3">${product.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
