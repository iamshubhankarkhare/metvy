import React, { useEffect, useState } from 'react';
import ListView from './components/listView';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex h="100%" justify="center" align="center" bg="#B0228C">
      <ListView />
      {/* <Test /> */}
    </Flex>
  );
}

export default App;
