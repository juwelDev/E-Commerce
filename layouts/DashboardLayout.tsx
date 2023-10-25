import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { baseUrl } from '@/config/appConfig';
import DashboardHeader from "@/layouts/DashboardHeader";
import DashboardFooter from "@/layouts/DashboardFooter";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DashboardLayout = ({ children, title }: Props): JSX.Element => {

  useEffect(() => {
    document.body.classList.add("w-screen");
    document.body.classList.add("h-screen");
    document.body.classList.add("bg-gray-100");
    document.body.classList.add("dark:bg-gray-900");
  });


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={`${baseUrl}/img/favicon.png`} type="image/x-icon" />
      </Head>
      <DashboardHeader />

      <div className="full">
        {children}
      </div>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
