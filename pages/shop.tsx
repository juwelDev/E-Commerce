import Head from "next/head";

import Breadcrumb from "@/components/Shop/Breadcrumb";
import Product from "@/components/Shop/Product";
import Layout from "@/layouts/Layout";

const ShopPage = () => {
  return (
    <Layout>
      <Head>
        <title>SStyle</title>
      </Head>

      {/* Main Start */}
      <Breadcrumb />
      <Product />

      {/*  Main End  */}
    </Layout>
  );
};

export default ShopPage;
