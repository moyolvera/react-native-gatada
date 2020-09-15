import React, { useState, useMemo, createContext } from 'react';
import staticData from '../assets/data';
import { Vato } from '../declarations/global.td';

type VatoContextType = {
  vatos: Vato[];
  setVatos?: React.Dispatch<React.SetStateAction<Vato[]>>;
};

export const VatoContext = createContext<VatoContextType>({
  vatos: staticData.vatos,
});

function VatoProvider({ children }: { children: React.ReactNode }) {
  const [vatos, setVatos] = useState<Vato[]>(staticData.vatos);
  const value = useMemo(() => ({ vatos, setVatos }), [vatos, setVatos]);

  return <VatoContext.Provider value={value}>{children}</VatoContext.Provider>;
}

export default VatoProvider;
