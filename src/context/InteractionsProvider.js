import { createContext, useContext, useState } from "react";

const InteractionsContext = createContext();

export function InteractionsProvider({ children }) {
  const [modal, setModal] = useState(false);
  return (
    <InteractionsContext.Provider value={{ modal, setModal }}>
      {children}
    </InteractionsContext.Provider>
  );
}

export const useInteractions = () => useContext(InteractionsContext);
