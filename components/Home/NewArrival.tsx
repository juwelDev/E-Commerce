import React from "react";
import { baseUrl } from '@/config/appConfig';

const NewArrival = () => {
    return (
        <div className="container">
            <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
                Top New Arrival
            </h2>
            <div className="row slider">
                {/* Col 1 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-6.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 2 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-4.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 3 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-10.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 4 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-12.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 5 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-13.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 6 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-14.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 7 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-15.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* Col 8 */}
                <div className="col border border-separate group">
                    {/* product image */}
                    <div className="relative overflow-hidden cursor-pointer">
                        <img src="images/product/product-16.jpg" alt="" className="w-full" />
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
                    {/* Product description */}
                    <div>
                        <h3 className="pl-3 pt-3 text-primary font-bold text-lg">
                            Wooden Chair
                        </h3>
                        {/* Product Price */}
                        <div className="flex items-center space-x-3 pl-3">
                            <h4 className="text-paragraph font-medium text-lg">$45.00</h4>
                            <h4 className="line-through text-paragraph font-normal text-sm">
                                $55.00
                            </h4>
                        </div>
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
                        <div className="text-center">
                            <a
                                href="#"
                                className="text-primary border border-accentOne w-full block py-1 font-medium hover:bg-gradient-to-r from-accentOne to-accentTwo hover:text-white transition duration-150"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrival;