import * as React from "react";

export interface UserDataInterface {
  userLocation?: string;
  jobLocations?: string[];
  jobSkills?: string[];
}

export interface UserDataContextType {
  userData: UserDataInterface;
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface>>;
}

export const UserDataContext = React.createContext<UserDataContextType>({
  userData: {},
  setUserData: () => {
    //this is intentional left empty.
  },
});
