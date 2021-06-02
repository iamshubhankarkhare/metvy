import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import {
  Flex,
  Text,
  Checkbox,
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
  const { itemsState } = React.useContext(StoreContext);
  const [items, setItems] = itemsState;

  useEffect(() => {
    Tabletop.init({
      key: '1AEzbvsCVZ5zPYbsXuOBJaGp4qLJzvG_bud9OMIRqV4k',
      simpleSheet: true,
    }).then(function (data) {
      setItems(data);
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
        p={[4, 12]}
        mx="auto"
        maxH="60%"
        overflow="auto"
      >
        {items.map((item) => (
          <Item key={item.earning_id} id={item.earning_id} data={item} />
        ))}
        <CheckboxGroup onChange={(e) => console.log(e)} size="lg">
          <VStack>
            {items.map((item) => (
              <Checkbox
                value={item.earning_id}
                key={item.earning_id}
                border="purple"
              >
                <Item
                  key={item.earning_id}
                  id={item.earning_id}
                  data={item}
                  isCheckBox={true}
                />
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </MotionUnorderedList>
    </AnimateSharedLayout>
  );
}

export default ListView;
