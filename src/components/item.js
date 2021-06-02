import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, ListItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import DecisionButtons from './decisionButtons';
import { StoreContext } from '../utils/store';

function Item({ id, data, isCheckBox }) {
  const [isOpen, setIsOpen] = useState(false);

  const MotionListItem = motion(ListItem);
  const MotionBox = motion(Box);

  const toggleOpen = () => {
    setIsOpen(true);
    console.log(id);
  };

  const preferredOrder = (obj, order) => {
    const newObject = {};
    for (let i = 0; i < order.length; i++) {
      if (obj.hasOwnProperty(order[i])) {
        newObject[order[i]] = obj[order[i]];
      }
    }
    return newObject;
  };

  data = preferredOrder(data, ['earning_id', 'mobile', 'earning']);

  return (
    <MotionListItem
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      liststyle="none"
      mx="auto"
      p={[8, 12]}
      my="4"
      w="100%"
      bg="rgba(214, 214, 214, 0.5)"
      cursor="pointer"
      _hover={{ bg: 'rgba(214, 214, 214, 0.8)' }}
    >
      <MotionBox layout>
        <Flex justify="space-around">
          {Object.keys(data).map((d, i) => (
            <Text
              fontSize={['xl', '2xl']}
              fontWeight="400"
              key={i}
              mx={[4, 20]}
            >
              {data[d]}
            </Text>
          ))}
        </Flex>
      </MotionBox>
      <AnimatePresence>
        {isOpen && !isCheckBox && <DecisionButtons data={data} />}
      </AnimatePresence>
    </MotionListItem>
  );
}

export default Item;
