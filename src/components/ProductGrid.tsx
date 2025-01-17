'use client'

import Image from "next/image";
import { ProductType } from "@/ProductType/type";


export default async function ProductGrid({productResponse, AddToCart}: {productResponse: ProductType[], AddToCart:(product:ProductType)=>void;}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4 gap-12">
        {productResponse.map((productinfo: ProductType) => (
          <>
            <div key={productinfo._id}>
              <Image
                src={productinfo.image_url}
                alt="product image"
                width={300}
                height={300}
              />
              <h1>{productinfo.name}</h1>
              <p>{productinfo.description}</p>
              <p>{productinfo.price}</p>
              <button className="bg-blue-800 text-white py-4 px-6 rounded-lg"
              onClick={()=>AddToCart(productinfo)}
              >
                Add To Cart
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
