/* eslint-disable react/require-default-props */
import React from 'react';
import { Button } from '@chakra-ui/react';

interface IMybutton{
        children:any;
        buttonType: 'button' | 'submit' | 'reset' | undefined;
        onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MyButtonRounded = (props:IMybutton) => {
 const { children, buttonType, onClick = undefined } = props;
    return (
      <Button borderLeftRadius="full" borderRightRadius="full" onClick={onClick} mt={1} size="lg" bg="app.primary" color="white" _hover={{ bg: '#f9acaa' }} type={buttonType}>
        {children}
      </Button>
      );
};

export default MyButtonRounded;
