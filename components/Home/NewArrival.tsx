import React from "react";
import { baseUrl } from '@/config/appConfig';
import ProductCard from "../Products/ProductCard";

const NewArrival = () => {
    return (
        <div className="container">
            <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
                Top New Arrival
            </h2>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-4 grid-cols-4 gap-4">
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
                <div className="col border border-separate group">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default NewArrival;