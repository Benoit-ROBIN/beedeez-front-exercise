import React, {ReactNode, useContext, useMemo} from 'react';
import {createContext, useState} from 'react';

type Context = {
  itemNb: number;
  setItemNb: (value: number) => void;
  filter: string;
  setFilter: (value: string) => void;
};

const StationsContext = createContext<Context>({
  itemNb: 20,
  setItemNb: (value: number) => null,
  filter: '',
  setFilter: (value: string) => null,
});

export const StationsProvider = ({children}: {children: ReactNode}) => {
  const [itemNb, setItemNb] = useState(20);
  const [filter, setFilter] = useState('');

  const values = useMemo(
    () => ({
      itemNb,
      setItemNb,
      filter,
      setFilter,
    }),
    [itemNb, filter],
  );

  return (
    <StationsContext.Provider value={values}>
      {children}
    </StationsContext.Provider>
  );
};

export function useStationsContext() {
  const context = useContext(StationsContext);
  if (context === undefined) {
    throw new Error(
      'useStationsContext must be used within a useStationsContext',
    );
  }

  return context;
}
