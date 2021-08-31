import React from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import Hero from '../components/parts/Hero';

const Home: NextPage = () => (
  <Flex
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    w="100%"
  >
    <Hero />
  </Flex>
  );

export default Home;
