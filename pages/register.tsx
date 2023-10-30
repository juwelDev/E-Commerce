import React from "react";
import Head from 'next/head'
import Link from "next/link";

import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout"


const RegisterPage = () => {

  return (
    <Layout>
      <main className="p-5">
        <form method="post" className="w-[400px] mx-auto p-6 my-16" x-data="signupForm">
          <h2 className="text-2xl font-semibold text-center mb-4">Create an account</h2>
          <p className="text-center text-gray-500 mb-3">
            or
            <Link
                href={`${baseUrl}/login`} className="text-sm text-purple-700 hover:text-purple-600">login with existing account</Link>
          </p>
          <div className="mb-4">
            <input placeholder="Your First Name" type="text" name="name"  className="border-gray-300 p-2 focus:outline-none  rounded-md w-full" />
            <small className="text-red-600"></small>
          </div>
          <div className="mb-4">
            <input placeholder="Your Last Name" type="text" name="name"  className="border-gray-300 p-2 focus:outline-none  rounded-md w-full" />
            <small className="text-red-600"></small>
          </div>
          <p />
          <div className="mb-4">
            <input placeholder="Your Email" type="email" name="email" x-model="form.email" className="border-gray-300 p-2 focus:outline-none  rounded-md w-full" />
            <small className="text-red-600" />
          </div>
          <div className="mb-4">
            <input placeholder="Password" type="password" name="password" x-model="form.password" className="border-gray-300 focus:outline-none p-2  rounded-md w-full" />
            <small x-show="errors.password" x-text="errors.password" className="text-red-600" />
          </div>
          <div className="mb-4">
            <input placeholder="Repeat Password" type="password" name="password" x-model="form.password_repeat" className="border-gray-300 focus:outline-none p-2  rounded-md w-full" />
            <small className="text-red-600" />
          </div>
          <button className="btn-primary text-white bg-emerald-500 hover:bg-emerald-600 p-2 active:bg-emerald-700 w-full">
            Signup
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default RegisterPage;