import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout";

const CartItemPage = () => {
  return (
    <Layout>
      <div className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Cart Items</h1>
          <div className="bg-white p-4 rounded-lg shadow">
            <div>
              <div>
                <div>
                  <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="/src/product.html"
                      className="w-36 h-32 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`${baseUrl}/img/product/product-1.jpg`}
                        alt=""
                        className="object-cover"
                      />
                    </a>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between mb-3">
                        <h3>
                          Logitech G502 HERO High Performance Wired Gaming
                          Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable
                          Weights, 11
                        </h3>
                        <span className="text-lg font-semibold">
                          $<span>100</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          Qty:
                          <input
                            type="number"
                            className="ml-3 py-1 border-gray-200 focus:border-purple-600 focus:ring-purple-600 w-16"
                          />
                        </div>
                        <a
                          href="#"
                          className="text-purple-600 hover:text-purple-500"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*/ Product Item */}
                  <hr className="my-5" />
                </div>
              </div>
              {/* Product Item */}
            </div>
            {/*/ Product Items */}
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal</span>
                <span className="text-xl">$59</span>
              </div>
              <p className="text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartItemPage;
