import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { StoreContext } from '../utils/store';
import RejectModal from './rejectModal';

function DecisionButtons({ data }) {
  const MotionBox = motion(Box);
  const { approvedItemsState, itemsState } = React.useContext(StoreContext);

  //destructure state functions from context
  const [approvedItems, setApproveditems] = approvedItemsState;
  const [items, setItems] = itemsState;

  const toast = useToast();
  const handleApprove = () => {
    console.log('Approved Users');

    data.action = 'approve';
    console.table([...approvedItems, data]);
    setApproveditems([...approvedItems, data]);

    // delete item from ListView
    const newAr = items.filter((item) => item.earning_id !== data.earning_id);
    setItems(newAr);
    toast({
      title: 'Approved',
      description: 'Looks like a match! The user will contact you soon.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <MotionBox
      w="100%"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex w="100%" justify="space-around" mt={[4, 8]}>
        <RejectModal data={data} />
        <Button
          colorScheme="green"
          w="2xs"
          ml="2"
          onClick={() => handleApprove()}
        >
          Approve
        </Button>
      </Flex>
    </MotionBox>
  );
}

export default DecisionButtons;
