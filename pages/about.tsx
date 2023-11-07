import Head from "next/head";
import About from "@/components/About/about";

import Layout from "@/layouts/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>KC's Fashion</title>
      </Head>

      {/* Main Start */}
      
      < About/>

      {/*  Main End  */}
    </Layout>
  );
};

export default AboutPage;