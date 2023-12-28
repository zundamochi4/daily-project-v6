import { createContext, useContext } from 'react';

export const AuthContext = createContext({ loggedIn: false });

export const useAuth = () => {
  return useContext(AuthContext);
};
