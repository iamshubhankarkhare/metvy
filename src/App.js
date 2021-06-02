import React, { useEffect, useState } from 'react';
import ListView from './components/listView';
import { Flex } from '@chakra-ui/react';
import StoreProvider from './utils/store';

function App() {
  return (
    <Flex h="100%" justify="center" align="center" bg="#B0228C">
      <StoreProvider>
        <ListView />
      </StoreProvider>
    </Flex>
  );
}

export default App;
