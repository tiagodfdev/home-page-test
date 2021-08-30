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
    bg="linear-gradient(32deg, rgb(22, 135, 237), rgb(20, 55, 90));
    "
    h="100vh"
  >
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      w="90%"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Flex>
  </Flex>
);

export default Layout;
