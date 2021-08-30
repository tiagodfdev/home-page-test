/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  FormControl, Input, InputGroup, InputLeftAddon,
} from '@chakra-ui/react';
import { IForm } from '../../types';

const MyFormControl = (props:IForm) => {
  const {
    id, label, type, setStateTarget, placeholder, isDisableEditStatus,
  } = props;
  return (
    <FormControl
      isRequired
      id={id}
      display="flex"
      listStyleType="none"
      size="sm"
      m="0.2rem"
      w="100%"
      color="bluePalette.500"
      backgroundColor="#bluePalette.100"
      borderRadius="0.3rem"
      fontSize="x-large"
      fontFamily="Gelion Regular"
      fontWeight="400"
    >
      <InputGroup size="md">
        <InputLeftAddon bg="bluePalette.200" color="bluePalette.500" children={label} />
        <Input
          color="black"
          bg="blue.100"
          name={id}
          isDisabled={isDisableEditStatus}
          type={type}
          _placeholder={{ backgroundColor: 'transparent' }}
          placeholder={placeholder}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            /* @ts-ignore */
          setStateTarget(e.currentTarget.value);
}}
        />
      </InputGroup>
    </FormControl>
  );
};

export default MyFormControl;
