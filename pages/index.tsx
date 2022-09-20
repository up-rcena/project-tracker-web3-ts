import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Head from "next/head";
import Template from "../src/components/layout/layout";
import  { Meta } from '../src/components/elements/meta';

const Home: NextPageWithLayout = () => {
  return <section>Main page</section>;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Template>
      <Meta
        title={'Project Tracker Web3'}
        description={'Project Tracker Web3 NFT'}
      />
      <main>{page}</main>
    </Template>
  );
};
