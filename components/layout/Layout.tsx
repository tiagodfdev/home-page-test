/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    bg="app.bg"
    w="100vw"
    h="100vh"
  >

    <Header />
    <Flex
      as="main"
      w="100%"
    >
      {children}
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;
