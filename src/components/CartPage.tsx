"use client";

import { ProductType } from "@/ProductType/type";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";

export default function CartPage(productResponse: {
  productResponse: ProductType[];
}) {
  const [cart, setCart] = useState<ProductType[]>([]);

  const handleAddToCart = (product: ProductType) => {
    setCart((prevProduct) => [...prevProduct, product]);
  };
  const handleRemoveFromCart = (product_id: string) => {
    const newData = cart.filter((item) => {
      return item._id !== product_id;
    });
    setCart(newData);
  };

  return (
    <>
      <ProductGrid
        productResponse={productResponse.productResponse}
        AddToCart={handleAddToCart}
      />
      <div className="w-[80%] mx-auto my-10">
        <h1>Cart Page</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: ProductType) => {
              return (
                <tr>
                  <td>Product 1</td>
                  <td>$100</td>
                  <td>2</td>
                  <td>$200</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
