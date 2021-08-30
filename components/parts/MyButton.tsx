/* eslint-disable react/require-default-props */
import React from 'react';
import { Button } from '@chakra-ui/react';

interface IMybutton{
        children:any;
        buttonType: 'button' | 'submit' | 'reset' | undefined;
        onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MyButton = (props:IMybutton) => {
 const { children, buttonType, onClick = undefined } = props;
    return (
      <Button onClick={onClick} mt={1} size="md" bg="bluePalette.400" color="bluePalette.100" _hover={{ bg: 'bluePalette.300' }} type={buttonType}>
        {children}
      </Button>
      );
};

export default MyButton;
