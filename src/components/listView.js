import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import { Box, forwardRef, UnorderedList, ListItem } from '@chakra-ui/react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionUnorderedList = motion(UnorderedList);
const MotionListItem = motion(ListItem);

function ListView() {
  const [data, setData] = useState({});
  useEffect(() => {
    Tabletop.init({
      key: '1AEzbvsCVZ5zPYbsXuOBJaGp4qLJzvG_bud9OMIRqV4k',
      simpleSheet: true,
    }).then(function (data) {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <AnimateSharedLayout>
      <MotionUnorderedList
        layout
        initial={{ borderRadius: 25 }}
        liststyle="none"
        bg="white"
        w={['xs', '4xl']}
        p="12"
        mx="auto"
        maxH="60%"
        overflow="auto"
      >
        {items.map((item) => (
          <Item key={item} id={item} />
        ))}
      </MotionUnorderedList>
    </AnimateSharedLayout>
  );
}

function Item({ id }) {
  const [isOpen, setIsOpen] = useState(false);

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
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </MotionListItem>
  );
}

function Content() {
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

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default ListView;
