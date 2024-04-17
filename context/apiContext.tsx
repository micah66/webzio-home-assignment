'use client';

import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react';

const UserApiKeyContext = createContext<{
  userApiKey: string;
  setUserApiKey: Dispatch<SetStateAction<string>>;
}>({ userApiKey: '', setUserApiKey: () => '' });

export function Provider({ children }: { children: React.ReactNode }) {
  const [userApiKey, setUserApiKey] = useState('');
  return (
    <UserApiKeyContext.Provider value={{ userApiKey, setUserApiKey }}>
      {children}
    </UserApiKeyContext.Provider>
  );
}

export function useUserApiContext() {
  return useContext(UserApiKeyContext);
}
