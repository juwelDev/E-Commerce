import React from "react";
import { baseUrl } from '@/config/appConfig';

const Categorys = () => {
    return (
      <div className="container">
      <h2 className="text-primary font-semibold text-3xl uppercase pb-10">
        <b>Shop By Category</b>
      </h2>
      <div className="row grid grid-cols-3 gap-3">
        {/* Col 1 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/jacket-2.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-primary font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            Jackets
          </a>
        </div>
        {/* Col 2 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/pant-3.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-accentTwo font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            Pants
          </a>
        </div>
        {/* Col 3 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/tshirt-1.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-accentOne font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            T-Shirt
          </a>
        </div>
        {/* sCol 4 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/shoes-2.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-primary font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            Shoes
          </a>
        </div>
        {/* Col 5 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/watch-2.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-accentTwo font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            Watch
          </a>
        </div>
        {/* Col 6 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
           src={`${baseUrl}/img/collection/sunglass-1.jpg`}
            alt=""
            className="w-full group-hover:scale-105 transition duration-500"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center text-accentOne font-medium text-2xl bg-black/30 hover:bg-black/50 transition"
          >
            Sunglasses
          </a>
        </div>
      </div>
    </div>
    );
}

export default Categorys;