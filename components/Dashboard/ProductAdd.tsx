const ProductAdd = () => {
  return (
    <>
      <div className=" bg-gray-50 dark:bg-gray-900">
        <h1 className="text-primary font-bold text-3xl text-center py-10 border-b-2	">
          Add Product
        </h1>
        <div className="grid grid-cols-2 gap-10 p-5 text-center">
          <div>
            <h2>Product name</h2>
            <input
              className=" rounded my-2 dark:bg-gray-800"
              type="text"
              name=""
              id=""
              placeholder="Apple Imac 27"
            />
          </div>
          <div>
            <h2>Category </h2>
            <input
              className=" rounded my-2 dark:bg-gray-800"
              type="text"
              name=""
              id=""
              placeholder="Electronics"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 p-5 text-center">
          <div>
            <h2>Brand</h2>
            <input
              className=" rounded my-2 dark:bg-gray-800"
              type="text"
              name=""
              id=""
              placeholder="Apple Imac 27"
            />
          </div>
          <div>
            <h2>Price</h2>
            <input
              className=" rounded my-2 dark:bg-gray-800"
              type="text"
              name=""
              id=""
              placeholder="230$"
            />
          </div>
        </div>
        <div className="w-3/4 mx-auto text-center px-16">
          <h2>Product details</h2>
          <textarea
            name=""
            id=""
            rows={8}
            cols={10}
            placeholder="Apple Imac 27 , iphone , imac"
            className="w-full my-2 p-2 rounded dark:bg-gray-800"
          ></textarea>
        </div>
        <div className="  text-center py-10  border-b-2">
          <div className="flex items-center justify-center mx-auto px-16 w-3/4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-10 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
