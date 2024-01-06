import React from "react";
import { baseUrl } from '@/config/appConfig';
import Link from "next/link";

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
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-primary font-medium text-2xl  hover:bg-black/50 transition "
          >
          <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2 "> Jackets</Link>
            
          </span>
        </div>
        {/* Col 2 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/pant-3.jpg`}
            alt=""
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-accentTwo font-medium text-2xl  hover:bg-black/50 transition"
          >
          <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2"> Pants</Link>
          </span>
        </div>
        {/* Col 3 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/tshirt-1.jpg`}
            alt=""
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-accentOne font-medium text-2xl  hover:bg-black/50 transition"
          >
          <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2">T-Shirt</Link>
          </span>
        </div>
        {/* sCol 4 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/shoes-2.jpg`}
            alt=""
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-primary font-medium text-2xl  hover:bg-black/50 transition"
          >
             <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2">Shoes</Link>
          </span>
        </div>
        {/* Col 5 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
            src={`${baseUrl}/img/collection/watch-2.jpg`}
            alt=""
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-accentTwo font-medium text-2xl  hover:bg-black/50 transition"
          >
           <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2">Watch</Link>
          </span>
        </div>
        {/* Col 6 */}
        <div className="col relative overflow-hidden rounded-sm group">
          <img
           src={`${baseUrl}/img/collection/sunglass-1.jpg`}
            alt=""
            className="w-full h-full group-hover:scale-105 transition duration-500"
          />
          <span className="absolute inset-0 flex justify-center items-center text-accentOne font-medium text-2xl  hover:bg-black/50 transition"
          >
           <Link href={`${baseUrl}/#`}className="rounded-md px-6 py-2 font-medium hover:bg-accentTwo text-white border-solid border-2">Sunglasses</Link>
          </span>
        </div>
      </div>
    </div>
    );
}

export default Categorys;