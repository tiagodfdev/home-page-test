/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { NextPage } from 'next';
import { Flex, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Arbust from '../../assets/images/flores.png';
import HeroImage from '../../assets/images/foto1.png';
import PlayIcon from '../../assets/icons/play.png';
import MyButton from './MyButton';

const Hero: NextPage = () => (
  <Flex
    w="100%"
    justifyContent="flex-start"
  >
    <Flex
      position="absolute"
      top={['30%', '30%', '10%', '10%']}
      left={['-30px', '-30px', '-160px', '-160px']}
      w={['25%', '25%', '50%%', '25%']}
    >
      <NextImage placeholder="blur" src={Arbust} alt="arbust image" />
    </Flex>
    <Flex
      pl={['2rem', '2rem', '20%', '20%']}
      pr={['2rem', '2rem', '0px', '0px']}
      mt={['2rem', '2rem', '10%', '10%']}
      flexDir="column"
      zIndex={2}
    >
      <Heading mb={2} w="100%" fontSize="md" color="app.primary" as="h4">
        SPA & BEAUTY CENTER
      </Heading>
      <Flex
        flexDir="column"
        mb={6}
      >
        <Heading w="100%" fontSize="xxx-large" color="black" as="h6">
          Beauty and success
        </Heading>
        <Heading w="100%" fontSize="xxx-large" color="black" as="h6">
          starts here.
        </Heading>
      </Flex>
      <Flex
        flexDir="column"
        mb={6}
      >
        <Text>
          Together creeping heaven upon third dominion be upon won't darkness rule
        </Text>
        <Text>
          behold it created good saw after she'd Our set living.
        </Text>
      </Flex>
      <Flex
        flexDir={['column', 'column', 'row', 'row']}
        alignItems={['flex-start', 'flex-start', 'center', 'center']}
        justify="flex-start"
      >
        <Flex mr={6}>
          <MyButton buttonType="button">
            <Text mr={2}>RESERVE NOW</Text>
            <ArrowForwardIcon />
          </MyButton>
        </Flex>
        <Flex mt={['6', '6', '0', '0']} justify="center" align="center">
          <NextImage placeholder="blur" src={PlayIcon} alt="play video" />
          <Text ml={2}>Watch our story</Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex
      display={['none', 'none', 'flex', 'flex']}
      position="absolute"
      right="-20px"
      top="0"
      w="40%"
      zIndex={1}
    >
      <NextImage placeholder="blur" src={HeroImage} alt="arbust image" />
    </Flex>
  </Flex>
  );

export default Hero;
