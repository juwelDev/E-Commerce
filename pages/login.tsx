const Login = () => {
  return (
    <>
      <main className="p-5 bg-inherit">
        <form action="" method="post" className="w-[400px] mx-auto p-6 my-16">
          <h2 className="text-2xl font-semibold text-center mb-5">
            Login to your account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            or
            <a
              href="/src/signup.html"
              className="text-sm text-purple-700 hover:text-purple-600"
            >
              create new account
            </a>
          </p>
          <div className="mb-4">
            <input
              id="loginEmail"
              type="email"
              name="email"
              placeholder="Your email address"
              className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <input
              id="loginPassword"
              type="password"
              name="password"
              placeholder="Your password"
              className="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            />
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <input
                id="loginRememberMe"
                type="checkbox"
                className="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
              />
              <label htmlFor="loginRememberMe">Remember Me</label>
            </div>
            <a
              href="/src/password-reset.html"
              className="text-sm text-purple-700 hover:text-purple-600"
            >
              Forgot Password?
            </a>
          </div>
          <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full">
            Login
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
