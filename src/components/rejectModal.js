import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Textarea,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { StoreContext } from '../utils/store';

const RejectModal = ({ data }) => {
  const [value, setValue] = useState('');
  const toast = useToast();
  const { rejectedItemsState, itemsState } = React.useContext(StoreContext);

  //destructure state functions from context
  const [rejectedItems, setRejecteditems] = rejectedItemsState;
  const [items, setItems] = itemsState;

  const handleReject = () => {
    if (value === '') {
      toast({
        title: 'Remark is required',
        description: 'We need your remarks to improve our performance',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } else {
      console.log('Rejected Users');

      data.action = 'reject';
      data.remark = value;
      console.table([...rejectedItems, data]);
      setRejecteditems([...rejectedItems, data]);

      // delete item from ListView
      const newAr = items.filter((item) => item.earning_id !== data.earning_id);
      setItems(newAr);
      toast({
        title: 'Rejected',
        description: 'Thanks for your remark! Keep exploring though..',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button _hover={{}} onClick={onOpen} colorScheme="pink" w="2xs" mr="2">
        Reject
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What went wrong?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Enter your remark here.."
              size="sm"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={() => handleReject()}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default RejectModal;
