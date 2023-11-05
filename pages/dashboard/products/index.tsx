import Head from "next/head";

import ProductList from "@/components/Dashboard/ProductList";
import DashboardLayout from "@/layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <ProductList />
    </DashboardLayout>
  );
};

export default DashboardPage;
