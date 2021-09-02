/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import photo1 from '../assets/images/feature-modern-style.png';
import photo2 from '../assets/images/feature-body-treatment.png';
import photo3 from '../assets/images/feature-best-places.png';
import photo4 from '../assets/images/feature-expert-staff.png';
import FeatureImage from '../components/parts/FeatureImage';

const Features: NextPage = () => (
  <Flex
    flexDir={['column', 'column', 'row', 'row']}
    w="100%"
    justify="center"
    align="center"
    mb="6rem"
  >
    <Flex
      w="100%"
    >
      <FeatureImage photo={photo1}>
        ICON HERE
      </FeatureImage>
    </Flex>
    <Flex w="100%">
      <FeatureImage photo={photo2}>
        ICON HERE
      </FeatureImage>
    </Flex>
    <Flex w="100%">
      <FeatureImage photo={photo3}>
        ICON HERE
      </FeatureImage>
    </Flex>
    <Flex w="100%">
      <FeatureImage photo={photo4}>
        ICON HERE
      </FeatureImage>
    </Flex>
  </Flex>
  );

export default Features;
