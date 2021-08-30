/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

const colors = {
    bluePalette: {
        100: '#d9eaf1',
        200: '#8dd8e4',
        300: '#01b2ea',
        400: '#0285b7',
        500: '#005897',
    },
    formColors: {
        leftAddonBg: 'bluePalette.200',
    },
};

export const theme = extendTheme({ colors });
