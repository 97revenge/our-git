"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser(name: any[]) {
  return useContext(UserContext);
}
