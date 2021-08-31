/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <Flex
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    bg="app.bg"
    h="100vh"
  >
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
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
  </Flex>
);

export default Layout;
