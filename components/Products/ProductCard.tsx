import React from "react";
import { baseUrl } from '@/config/appConfig';

const ProductCard = () => {
    return (
        <div className="w-[272px] h-[410px]">
            {/* product image */}
            <div className="w-full relative overflow-hidden cursor-pointer">
                <img src={`${baseUrl}/img/product/product-14.jpg`} alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center space-x-1 bg-black/20 opacity-0 group-hover:opacity-100 transition">
                    <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-accentOne p-2 flex items-center justify-center"
                    >
                        <i className="fa-solid fa-magnifying-glass" />
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-accentOne p-2 flex items-center justify-center"
                    >
                        <i className="fa-regular fa-heart" />
                    </a>
                </div>
            </div>
            {/* product image */}

            {/* Product description */}
            <div className="w-full ">
                <h3 className="pl-3 pt-3 text-primary font-bold text-lg">Wooden Chair</h3>

                {/* Product Price */}
                <div className="flex items-center space-x-3 pl-3">
                    <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                    <h4 className="line-through text-paragraph font-normal text-sm">
                        $55.00
                    </h4>
                </div>
                {/* Product Price */}

                {/* Product Rating*/}
                <div className="flex items-center space-x-3 pl-3 pb-3">
                    <span className="flex">
                        <i className="fa-solid fa-star text-accentOne" />
                        <i className="fa-solid fa-star text-accentOne" />
                        <i className="fa-solid fa-star text-accentOne" />
                        <i className="fa-solid fa-star text-accentOne" />
                        <i className="fa-solid fa-star text-accentOne" />
                    </span>
                    <div>
                        <p className="text-paragraph">(150)</p>
                    </div>
                </div>
                {/* Product Rating*/}
                <div className="text-center">
                    <a
                        href="#"
                        className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
            {/* Product description */}
        </div>

    );
}

export default ProductCard;