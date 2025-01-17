import Image from "next/image";
import { ProductType } from "@/ProductType/type";
import { client } from "@/sanity/lib/client";
import ProductGird from "@/components/ProductGrid";
import CartPage from "@/components/CartPage";

const getProduct = async () => {
  const productResponse = await client.fetch(`*[_type=="product"]{
  _id,
  "image_url": image.asset->url,
    name,
    description,
    price,
}
    `);
  return productResponse;
};

export default async function Home() {
  const comeproduct = await getProduct();
  console.log(comeproduct);
  return (
    <>
      
      <CartPage productResponse={comeproduct} />
    </>
  );

  // This is use for fetching data from sanity on home page
  // const productResponse = await getProduct();
  // console.log(productResponse);
  // return (
  //   <>
  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4 gap-12">
  //       {productResponse.map((productinfo: ProductType) => (
  //         <>
  //           <div key={productinfo._id}>
  //             <Image
  //               src={productinfo.image_url}
  //               alt="product image"
  //               width={300}
  //               height={300}
  //             />
  //             <h1>{productinfo.name}</h1>
  //             <p>{productinfo.description}</p>
  //             <p>{productinfo.price}</p>
  //             <button className="bg-blue-800 text-white py-4 px-6 rounded-lg">
  //               Add To Cart
  //             </button>
  //           </div>
  //         </>
  //       ))}
  //     </div>
  //   </>
  // );
}
