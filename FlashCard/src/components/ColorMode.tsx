import { useColorMode, HStack, Switch,Text } from '@chakra-ui/react';
import React from 'react'

const ColorMode = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
      <HStack>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        {colorMode === "dark" ? (
          <Text whiteSpace="nowrap">Light Mode</Text>
        ) : (
          <Text whiteSpace="nowrap">Dark Mode</Text>
        )}
      </HStack>
    );
}

export default ColorMode