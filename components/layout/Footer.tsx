import React from 'react';
import {
 Button, Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import {
 FaFacebookF, FaInstagram, FaTwitter, FaVimeoV,
} from 'react-icons/fa';
import LeoSpa from '../../assets/images/logo.png';

const Footer = () => {
  const navItens = ['home', 'about', 'feature', 'service', 'contact'];
  const renderNavItens = navItens.map((item) => (
    <NextLink href={item === 'home' ? '/' : item} passHref>
      <Button
        key={item}
        fontSize="sm"
        fontWeight="normal"
        as="a"
        variant="ghost"
        aria-label={item}
        w="100%"
      >
        {item.toLocaleUpperCase()}
      </Button>
    </NextLink>
));
return (
  <Flex alignSelf="flex-end" position="relative" bottom="0px" pb={['5rem', '5rem', '20', '20']} w="100%" as="footer">
    <Flex flexDir="column" w="100%" justify="center" align="center">
      <Flex mb={5}>
        <NextImage src={LeoSpa} alt="LeoSpa Logo" />
      </Flex>
      <Flex
        mb={5}
        as="nav"
        display={['none', 'none', 'flex', 'flex']}
        color="header.color"
        alignItems="center"
        w={['100%', '100%', '50%', '50%']}
      >
        {renderNavItens}
      </Flex>
      <Flex>
        <Flex px={5} _hover={{ color: 'app.primary' }}>
          <FaFacebookF size="1.2em" />
        </Flex>
        <Flex borderLeft="1px solid gray" px={5} _hover={{ color: 'app.primary' }}>
          <FaTwitter size="1.2em" />
        </Flex>
        <Flex borderLeft="1px solid gray" px={5} _hover={{ color: 'app.primary' }}>
          <FaInstagram size="1.2em" />
        </Flex>
        <Flex borderLeft="1px solid gray" px={5} _hover={{ color: 'app.primary' }}>
          <FaVimeoV size="1.2em" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
 };

export default Footer;
