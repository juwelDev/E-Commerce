const login = () => {
  return (
    <div className=" min-h-screen bg-slate-200">
      <main className="p-5  bg-cover: bg-center ">
        <form action="" method="post" className="w-[400px] mx-auto p-6 my-16">
          <h2 className="text-2xl font-semibold text-center mb-5">
            Login to your account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            or{" "}
            <a
              href="/src/signup.html"
              className="text-sm text-purple-700 hover:text-purple-600"
            >
              create new account
            </a>
          </p>
          <div className="mb-4">
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="loginRememberMe"
                  type="checkbox"
                  className="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                />
                <label htmlFor="loginRememberMe">Remember Me</label>
              </div>
            </div>

            <a
              href="/src/password-reset.html"
              className="text-sm text-purple-700 hover:text-purple-600"
            >
              Forgot Password?
            </a>
          </div>
          <button className="btn-primary p-2  rounded bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};
export default login;
