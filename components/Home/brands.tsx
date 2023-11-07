import React from "react";
import { baseUrl } from '@/config/appConfig';

const Brands = () => {
    return (
        <div >
            <h2 className="container text-center text-primary font-semibold text-3xl uppercase pb-10">
                <b>Our Brands</b>
            </h2>
            <div className="container row grid grid-cols-5 gap-6">
                <div className="  basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src={`${baseUrl}/img/brand/nike.png`} alt="" />
                </div>
                <div className="  basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src={`${baseUrl}/img/brand/zara.png`} alt="" />
                </div>
                <div className="  basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src={`${baseUrl}/img/brand/ck.png`} alt="" />
                </div>
                <div className="  basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src={`${baseUrl}/img/brand/puma.png`} alt="" />
                </div><div className="  basis-1/2 group-hover:scale-105 transition duration-500">
                        <img src={`${baseUrl}/img/brand/rolex.png`} alt="" />
                </div>

            </div>

        </div>

        );
    }
    
    export default Brands;