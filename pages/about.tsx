import Head from "next/head";
import About from "@/components/About/about";

import Layout from "@/layouts/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>SStyle</title>
      </Head>

      {/* Main Start */}
      
      < About/>

      {/*  Main End  */}
    </Layout>
  );
};

export default AboutPage;