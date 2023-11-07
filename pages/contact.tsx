import Head from "next/head";
import Contact from "@/components/Contact/contact";


import Layout from "@/layouts/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>KC's Fashion</title>
      </Head>

      <Contact/>
      
     

      {/*  Main End  */}
    </Layout>
  );
};

export default ContactPage;