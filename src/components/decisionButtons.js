import React, { useState, useEffect } from 'react';
import { Box, forwardRef, UnorderedList, ListItem } from '@chakra-ui/react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function DecisionButtons() {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>hello</div>
    </MotionBox>
  );
}

export default DecisionButtons;
