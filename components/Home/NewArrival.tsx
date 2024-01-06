import React, { useEffect, useState } from "react";
import { baseUrl } from '@/config/appConfig';
import ProductCard from "../Products/ProductCard";

const NewArrival = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([] as any);


    const getProducts = async () => {
        const getProducts = await fetch(`${baseUrl}/api/product/get-products`, {
            method: "GET",
        });
        const result = await getProducts.json();

        if (result.status == true) {
            setProducts(result.products);
            setLoading(false);
        } else {
            setProducts([]);
            setLoading(true);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="container">
            <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
                <b>Top New Arrival</b>
            </h2>
            <div className="w-full  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-4 ">
                {
                    loading ? null : <>
                        {
                            products.map((item: any, index: number) => (
                                <div key={`product-${index}`} className="col border border-separate group rounded-xl  overflow-hidden h-90">
                                    

                                    <ProductCard product={item} />
                                </div>
                            ))
                        }
                    </>
                }

            </div>
        </div>
    );
}

export default NewArrival;