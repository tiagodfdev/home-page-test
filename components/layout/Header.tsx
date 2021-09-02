import React, { useState } from 'react';
import {
 Button, Flex, IconButton,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import LeoSpa from '../../assets/images/logo.png';

const Header = () => {
  const navItens = ['home', 'about', 'feature', 'service', 'contact'];
  const [display, setDisplay] = useState('none');
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
  <Flex mb={10} zIndex={10} pl={['2rem', '2rem', '20%', '20%']} w="100%" as="header">
    <Flex w="100%" justifyContent={['space-between', 'space-between', 'flex-start', 'flex-start']} align="flex-end">
      <NextImage src={LeoSpa} alt="LeoSpa Logo" />
      <Flex
        as="nav"
        ml="5%"
        display={['none', 'none', 'flex', 'flex']}
        color="header.color"
        alignItems="flex-end"
      >
        {renderNavItens}
      </Flex>
      <Flex justify="flex-end">
        <IconButton
          bg="transparent"
          alignItems="flex-end"
          aria-label="open menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon color="app.primary" bg="transparent" />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => setDisplay('flex')}
        />
      </Flex>
    </Flex>
    <Flex
      w="100vw"
      bg="gray.50"
      zIndex={20}
      h="100vh"
      pos="fixed"
      opacity="0.95"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
      display={display}
    >
      <Flex justify="flex-end">
        <IconButton
          bg="transparent"
          mt={2}
          mr={2}
          aria-label="close menu"
          size="lg"
          icon={
            <CloseIcon />
          }
          onClick={() => setDisplay('none')}
        />
      </Flex>
      <Flex
        flexDir="column"
        align="center"
      >
        {renderNavItens}
      </Flex>
    </Flex>
  </Flex>
);
 };

export default Header;
