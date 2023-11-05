import Head from "next/head";

import ProductAdd from "@/components/Dashboard/ProductAdd";
import DashboardLayout from "@/layouts/DashboardLayout";

const AddProduct = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <div className="w-full">
        <ProductAdd />
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
