
"use client"
import React, { createContext, useState, ReactNode }  from "react";


interface ArrContextType {
  valuesArr: string[];
  setValuesArr: React.Dispatch<React.SetStateAction<string[]>>;
}
interface ArrProviderProps {
  children: ReactNode;
}

export const ArrContext = createContext<ArrContextType | any>(undefined);

export const ArrProvider = ({ children }: ArrProviderProps): JSX.Element => {
  const [valuesArr, setValuesArr] = useState<string[]>([]);

  return (
    <ArrContext.Provider value={{ valuesArr, setValuesArr }}>
      {children}
    </ArrContext.Provider>
  );
};


