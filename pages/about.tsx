/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { NextPage } from 'next';
import { Flex, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import redFlower from '../assets/images/redFlower.png';
import pinkFlower from '../assets/images/pinkFlower.png';
import logo2 from '../assets/images/logo2.png';
import MyButtonRounded from '../components/parts/MyButtonRounded';

const About: NextPage = () => (
  <Flex
    flexDir={['column', 'column', 'row', 'row']}
    w="100%"
    justify="center"
    align="center"
    mb="6rem"
  >
    <Flex
      position={['unset', 'unset', 'relative', 'relative']}
      left={['2rem', '2rem', '-12rem', '-12rem']}
      top={['2rem', '2rem', '-10rem', '-10rem']}
    >
      <NextImage placeholder="blur" src={redFlower} alt="arbust image" />
    </Flex>
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      w={['90%', '90%', '40%%', '40%']}
    >
      <Flex display={['none', 'none', 'flex', 'flex']} mb={3}>
        <NextImage placeholder="blur" src={logo2} alt="red flower" />
      </Flex>
      <Flex>
        <Text mb={3} color="about.color">
          ABOUT OUR SPA CENTER
        </Text>
      </Flex>
      <Flex>
        <Heading mb="3rem" w="100%" fontSize="xx-large" color="black" as="h6">
          Come and you will be inspired!
        </Heading>
      </Flex>
      <Flex mb="3rem">
        <Text color="about.color">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi quo, obcaecati neque earum hic ea et qui est culpa dicta totam atque deserunt,
          ex fugit nisi possimus veniam impedit distinctio.
        </Text>
      </Flex>
      <Flex>
        <MyButtonRounded buttonType="button">
          <Text mr={2}>RESERVE NOW</Text>
        </MyButtonRounded>
      </Flex>
    </Flex>
    <Flex
      position="relative"
      display={['none', 'none', 'flex', 'flex']}
      right={['1rem', '1rem', '-30px', '-30px']}
      zIndex={3}
    >
      <NextImage placeholder="blur" src={pinkFlower} alt="arbust image" />
    </Flex>
  </Flex>
  );

export default About;
