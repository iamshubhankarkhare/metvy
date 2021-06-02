import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export default function StoreProvider({ children }) {
  const [items, setItems] = useState([]);
  const [approvedItems, setApproveditems] = useState([]);
  const [rejectedItems, setRejecteditems] = useState([]);

  const store = {
    itemsState: [items, setItems],
    approvedItemsState: [approvedItems, setApproveditems],
    rejectedItemsState: [rejectedItems, setRejecteditems],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
