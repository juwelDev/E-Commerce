import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { baseUrl } from "@/config/appConfig";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button, Label, Modal } from 'flowbite-react';
import { FaImage } from "react-icons/fa";
import InputText from "@/components/Inputs/InputText";

const category = () => {

    const [loading, setLoading] = useState(true);
    const [conLoading, setConLoading] = useState(false);
    const [loadingImg, setLoadingImg] = useState(false);

    const [categories, setCategories] = useState([] as any);
    const [openModal, setOpenModal] = useState(false);

    const [newCategory, setNewCategory] = useState({
        title: "",
        slug: "",
        logo: "",
        parent_id: "",
        parent_title: "",
        parent_slug: "",
    });

    const [editCategory, setEditCategory] = useState({
        _id: null,
        title: "",
        slug: "",
        logo: "",
        parent_id: "",
        parent_title: "",
        parent_slug: "",
    });

    const getCats = async () => {
        const getCats = await fetch(`${baseUrl}/api/category/get-categories`, {
            method: "GET",
        });
        const result = await getCats.json();

        if (result.status == true) {
            setCategories(result.category);
            setLoading(false);
        } else {
            setCategories([]);
            setLoading(true);
        }
    };

    useEffect(() => {
        getCats();
    }, []);

    async function DeleteHandler(id: any) {
        const saved = await fetch(`/api/category/category_delete?id=${id}`, {
            method: "POST",
            body: JSON.stringify({
                date: new Date(),
            }),
        });
        const result = await saved.json();
        // console.log("result:-", result);
        if (result.status == "success") {
            toast.success(result.message);
        } else {
            toast.error(result.error);
        }
        getCats();
    }

    const updateCategory = (e: { target: { name: any; value: any } }) => {
        setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
    };

    const updateEditCategory = (e: { target: { name: any; value: any } }) => {
        setEditCategory({ ...editCategory, [e.target.name]: e.target.value });
    };

    const logoUpload = async (
        e: {
            target: {
                [x: string]: any;
                name: any;
                value: any;
            };
        },
        type: string
    ) => {
        setLoadingImg(true);
        var formdata = new FormData();
        formdata.append("image", e.target.files[0], e.target.files[0].name);
        var myHeaders = new Headers();
        
        var requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };
        const upload = await fetch(`${baseUrl}/api/upload`, requestOptions);
        const result = await upload.json();

        // console.log("result: -", result, "type :- ", type);
        // if (result.status == true) {
        //     setNewCategory({ ...newCategory, logo: result?.url });
        // }
        setLoadingImg(false);
    };

    const handelOpenModal = () => {
        // setNewCategory({
        //     ...newCategory,
        //     parent_id: data._id,
        //     parent_title: data.title,
        //     parent_slug: data.slug,
        // });

        setOpenModal(true);
    }

    const handelCloseModal = () => {
        setOpenModal(false);
    }

    async function SubmitHandler(e: any) {
        e.preventDefault();
        setConLoading(true);
        setLoading(true);

        if (category.logo == '') {
            toast.error("Please Upload Logo");
            setConLoading(false);
        } else {
            const saved = await fetch("/api/category/category_update", {
                method: "POST",
                body: JSON.stringify({
                    ...newCategory,
                    date: new Date(),
                }),
            });
            const result = await saved.json();
            // // console.log("result:-", result);
            if (result.status == "success") {
                getCats(cat_id);
                setLoading(false);
                fetchCategory();
                toast.success(result.message);
                setNewCategory({
                    ...newCategory,
                    _id: null,
                    title_bn: "",
                    title_en: "",
                    slug: "",
                    logo: "",
                    parent_id: "",
                    parent_title_bn: "",
                    parent_title_en: "",
                    parent_slug: "",
                });
            } else {
                toast.error(result.error);
            }

            // router.push(window.location.href);
            //@ts-ignore
            // @ts-nocheck
            location.reload();

            setConLoading(false);
            handelCloseModal();
        }
    }


    return (
        <DashboardLayout>
            <Head>
                <title>Categories | E-Commerce</title>
            </Head>
            <div className="bg-gray-50 dark:bg-gray-900 p-2 antialiased  mb-10">
                <div className="mx-auto w-full">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="flex-1 flex items-center space-x-2">
                                <h5>
                                    <span className="text-gray-500">All Categories</span>
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            id="simple-search"
                                            placeholder="Search for products"
                                            //   required=" "
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <button
                                    type="button"
                                    onClick={handelOpenModal}
                                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <svg
                                        className="h-3.5 w-3.5 mr-1.5 -ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        />
                                    </svg>
                                    Add Category
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor="checkbox-all" className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th scope="col" className="p-4">
                                            Product
                                        </th>
                                        <th scope="col" className="p-4">
                                            Category
                                        </th>
                                        <th scope="col" className="p-4">
                                            Stock
                                        </th>
                                        <th scope="col" className="p-4">
                                            Sales/Day
                                        </th>
                                        <th scope="col" className="p-4">
                                            Sales/Month
                                        </th>
                                        <th scope="col" className="p-4">
                                            Rating
                                        </th>
                                        <th scope="col" className="p-4">
                                            Sales
                                        </th>
                                        <th scope="col" className="p-4">
                                            Revenue
                                        </th>
                                        <th scope="col" className="p-4">
                                            Last Update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-table-search-1"
                                                    type="checkbox"
                                                    // onclick="event.stopPropagation()"
                                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                    htmlFor="checkbox-table-search-1"
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <div className="flex items-center mr-3">
                                                <img
                                                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                                    alt="iMac Front Image"
                                                    className="h-8 w-auto mr-3"
                                                />
                                                Apple iMac 27"
                                            </div>
                                        </th>
                                        <td className="px-4 py-3">
                                            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                                Desktop PC
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center">
                                                <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700" />
                                                95
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1.47
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            0.47
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="text-gray-500 dark:text-gray-400 ml-1">
                                                    5.0
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5 text-gray-400 mr-2"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                                </svg>
                                                1.6M
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">$3.2M</td>
                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center space-x-4">
                                                <button
                                                    type="button"
                                                    data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 mr-2 -ml-0.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-4 h-4 mr-2 -ml-0.5"
                                                    >
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                                        />
                                                    </svg>
                                                    Preview
                                                </button>
                                                <button
                                                    type="button"
                                                    data-modal-target="delete-modal"
                                                    data-modal-toggle="delete-modal"
                                                    className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 mr-2 -ml-0.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <nav
                            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                            aria-label="Table navigation"
                        >
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    1-10
                                </span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    1000
                                </span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    >
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        ...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        100
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Category</Modal.Header>
                <Modal.Body>

                    <div className="card-body">
                        <form className="p-4 z-40" onSubmit={SubmitHandler}>
                            <div className="w-full">
                                <div className="w-full flex justify-center">
                                    <div className="w-20 h-24 rounded-lg bg-gray-200">
                                        {loadingImg ? (
                                            <>
                                                <div className="mx-auto w-20 h-24 shadow-md transition duration-200 transform hover:scale-110">
                                                    <div
                                                        role="status"
                                                        className="w-full flex items-center justify-center"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="mt-4 mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                            viewBox="0 0 100 101"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                                fill="currentColor"
                                                            />
                                                            <path
                                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                                fill="currentFill"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {newCategory.logo == "" ? (
                                                    <>
                                                        <div className="w-full h-24 flex items-center justify-center">
                                                            <label className="w-full h-20 cursor-pointer">
                                                                <FaImage className="w-10 h-10 mt-2 ml-4" />
                                                                <span className="w-full  ml-1 mt-4 text-sm  antialiased font-sans">
                                                                    Add Logo
                                                                </span>
                                                                <input
                                                                    className="hidden"
                                                                    type="file"
                                                                    //@ts-ignore
                                                                    //@ts-nocheck
                                                                    onChange={(e) => logoUpload(e)}
                                                                />
                                                            </label>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="w-full h-20 relative">
                                                            <img
                                                                src={`${newCategory.logo}`}
                                                                className="w-20 h-24 rounded-lg"
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="mb-2">
                                        <label className="inline-block text-gray-800 dark:text-white text-sm sm:text-base mb-2">
                                            Title
                                            <span className="font-bold text-red-500 ">{" *"}</span>
                                        </label>
                                        <InputText
                                            value={newCategory.title}
                                            name="title"
                                            onChange={(e) => updateCategory(e)}
                                            placeholder="Enter Title"
                                            required={true}
                                        />
                                    </div>
                                </div>

                                {/* <div className="w-full">
                                    <div className="mb-2">
                                        <div className="mb-2 block">
                                            <Label htmlFor="ParentCategory" value="Parent Category" />
                                        </div>
                                        <select
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option selected>
                                                {newCategory.parent_title}
                                            </option>
                                        </select>
                                    </div>
                                </div> */}
                            </div>
                            <div>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {conLoading ? (
                                        <>
                                            <div
                                                role="status"
                                                className="w-full flex items-center justify-center"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className="mr-2 w-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>Submit</>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </DashboardLayout>
    )
}

export default category