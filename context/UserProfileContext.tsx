import { EditProfile } from "@types";
import dynamic from "next/dynamic";
import React, { ReactNode, useMemo, useState } from "react";

export const UserProfileContext = React.createContext(null);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const store = {
    isEdit: true,
  };

  return (
    <UserProfileContext.Provider value={store}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useProfileMutate = () => {};
