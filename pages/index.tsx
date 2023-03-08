import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import 'twin.macro';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content={''} />
      </Head>
    </>
  );
};

export default Index;
