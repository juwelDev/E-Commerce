import React from "react";
import { baseUrl } from '@/config/appConfig';

const WebFetchers = () => {
    return (
        <div className="container">
            <div>
                <h2 className=" text-center text-primary font-semibold text-3xl uppercase pb-10">
                Unleash your street style with our new collection
                </h2>
            </div>
            <div className="row max-w-5xl mx-auto grid grid-cols-3 gap-6">
                {/* col 1 */}
                <div className="col flex items-center px-10 py-5 space-x-5 border border-accentOne bg-primary">
                    <div>
                    <img src={`${baseUrl}/img/icon/free-shipping.png`} alt="" className="w-24 " />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">Free Shipping</h3>
                        <p>Order over $200</p>
                    </div>
                </div>
                {/* col 2 */}
                <div className="col flex items-center px-10 py-5 space-x-5 border border-accentOne  bg-primary">
                    <div>
                    <img src={`${baseUrl}/img/icon/save-money.png`} alt="" className="w-24 " />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">Money Return</h3>
                        <p>30 days money return</p>
                    </div>
                </div>
                {/* col 3 */}
                <div className="col flex items-center px-10 py-5 space-x-5 border border-accentOne  bg-primary">
                    <div>
                    <img src={`${baseUrl}/img/icon/customer-service.png`} alt="" className="w-24 " />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">24/7 Support</h3>
                        <p>Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebFetchers;