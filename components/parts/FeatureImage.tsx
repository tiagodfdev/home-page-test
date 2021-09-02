/* eslint-disable react/require-default-props */
import React from 'react';
import { Flex } from '@chakra-ui/react';
import NextImage, { ImageProps } from 'next/image';

interface IMyFeature{
        children:any;
        photo: ImageProps['src']
}

const FeatureImage = (props:IMyFeature) => {
 const { children, photo } = props;
    return (
      <Flex
        justify="center"
        align="center"
        width="100%"
        position="relative"
      >
        <Flex position="relative">
          <NextImage placeholder="blur" src={photo} alt="arbust image" />
          <Flex
            justify="center"
            align="center"
            transition="opacity 0.2s"
            _hover={{ opacity: 0.8 }}
            w="100%"
            h="100%"
            opacity="0"
            bg="app.primary"
            position="absolute"
            color="white"
          >
            {children}
          </Flex>
        </Flex>

      </Flex>
      );
};

export default FeatureImage;
