import React, { useState, useEffect } from 'react';
import { Box, ListItem } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import DecisionButtons from './decisionButtons';
import { StoreContext } from '../utils/store';

function Item({ id, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const MotionListItem = motion(ListItem);
  const MotionBox = motion(Box);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(id);
  };

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
    >
      <MotionBox layout>bye</MotionBox>
      <AnimatePresence>{isOpen && <DecisionButtons />}</AnimatePresence>
    </MotionListItem>
  );
}

export default Item;
