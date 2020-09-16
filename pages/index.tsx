import React from 'react';
import Head from 'next/head';
import { Heading, Center } from '@chakra-ui/core';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading size="lg">Home</Heading>
      </Center>
    </>
  );
}

export default Home;
