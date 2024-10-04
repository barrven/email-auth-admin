import { createContext, useContext } from 'react';

// Create the context
export const UserContext = createContext(null);

// Custom hook for easier access
export const useUser = () => useContext(UserContext);
