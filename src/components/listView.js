import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import {
  Box,
  Flex,
  Button,
  Text,
  Checkbox,
  useToast,
  CheckboxGroup,
  VStack,
  UnorderedList,
} from '@chakra-ui/react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Item from './item';
import { StoreContext } from '../utils/store';

const MotionUnorderedList = motion(UnorderedList);

function ListView() {
  const [checkboxValue, setCheckboxvalue] = useState([]);
  const [isSelectMode, setIsselectmode] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const { itemsState, approvedItemsState } = React.useContext(StoreContext);

  const MotionBox = motion(Box);
  const [items, setItems] = itemsState;
  const [approvedItems, setApproveditems] = approvedItemsState;

  const toast = useToast();

  const headings = ['Earning Id', 'Mobile.number', 'Earnings'];

  useEffect(() => {
    Tabletop.init({
      key: '1AEzbvsCVZ5zPYbsXuOBJaGp4qLJzvG_bud9OMIRqV4k',
      simpleSheet: true,
    }).then(function (data) {
      setItems(data);
      setIsloading(false);
    });
  }, []);

  const handleCheck = (e) => {
    setCheckboxvalue(e);
  };

  const handleApproveSelected = () => {
    console.log('Approved Users');

    const selected = items.filter((item) =>
      checkboxValue.includes(item.earning_id)
    );
    setApproveditems([...approvedItems, ...selected]);
    const notSelected = items.filter((item) => !selected.includes(item));
    setItems(notSelected);
    setIsselectmode(false);

    console.table([...approvedItems, ...selected]);

    toast({
      title: 'Approved',
      description: 'Selected users have been approved!!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      {isLoading ? (
        <MotionBox
          bg="white"
          borderRadius="30px"
          w="12"
          h="12"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        />
      ) : (
        <AnimateSharedLayout>
          <MotionUnorderedList
            layout
            initial={{ borderRadius: 25 }}
            liststyle="none"
            bg="white"
            w={['xs', '4xl']}
            p={[4, 12]}
            mx="auto"
            maxH="60%"
            overflow="auto"
          >
            <Flex w="100%" justify="space-between" mb={[4, 8]}>
              <Text fontSize={['2xl', '3xl']} fontWeight="700">
                Users
              </Text>
              <Flex>
                <Button
                  mx={[0, 4]}
                  _hover={{}}
                  colorScheme="teal"
                  onClick={() => setIsselectmode(!isSelectMode)}
                >
                  Select mode
                </Button>
                {isSelectMode && (
                  <Button
                    colorScheme="green"
                    onClick={() => handleApproveSelected()}
                  >
                    Approve selected
                  </Button>
                )}
              </Flex>
            </Flex>
            <Flex
              justify="space-around"
              w="100%"
              fontSize={['md', '2xl']}
              fontWeight="400"
            >
              {headings.map((heading, i) => (
                <Text key={i}>{heading}</Text>
              ))}
            </Flex>
            {!isSelectMode &&
              items.map((item) => (
                <Flex
                  px={[8, 12]}
                  my="4"
                  bg="rgba(214, 214, 214, 0.5)"
                  key={item.earning_id}
                >
                  <Item id={item.earning_id} data={item} />
                </Flex>
              ))}
            {isSelectMode && (
              <CheckboxGroup onChange={(e) => handleCheck(e)} size="lg">
                <VStack>
                  {items.map((item) => (
                    <Flex
                      px={[8, 12]}
                      my="4"
                      bg="rgba(214, 214, 214, 0.5)"
                      key={item.earning_id}
                    >
                      <Checkbox value={item.earning_id} border="purple">
                        <Item
                          key={item.earning_id}
                          id={item.earning_id}
                          data={item}
                          isCheckBox={true}
                        />
                      </Checkbox>
                    </Flex>
                  ))}
                </VStack>
              </CheckboxGroup>
            )}
          </MotionUnorderedList>
        </AnimateSharedLayout>
      )}
    </>
  );
}

export default ListView;
