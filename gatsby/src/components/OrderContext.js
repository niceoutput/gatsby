import React, { useState } from 'react';

// Creat a order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // Need to stick the state here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
