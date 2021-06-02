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
      mx="auto"
      w="100%"
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
              mx={[2, 20]}
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
