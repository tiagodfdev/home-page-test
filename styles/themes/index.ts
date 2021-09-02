/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

const colors = {
    app: {
        color: '#d9eaf1',
        bg: '#FFF',
        primary: '#ff817e',
    },
    header: {
        color: '#263a41',
    },
    about: {
        color: '#888',
    },
};

export const theme = extendTheme({ colors });
