import Head from "next/head";

import Orderlists from "@/components/Dashboard/Orderlists";
import DashboardLayout from "@/layouts/DashboardLayout";

const OrdersPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <Orderlists />
    </DashboardLayout>
  );
};

export default OrdersPage;
