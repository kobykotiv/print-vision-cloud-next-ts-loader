import * as React from 'react';
import { PlasmicDataSourceContextProvider } from '@plasmicapp/react-web';

interface GlobalContextsProviderProps {
  children?: React.ReactNode;
}

const PlasmicGlobalContextsProviderComponent = ({ children, ...props }: GlobalContextsProviderProps) => {
  return (
    <PlasmicDataSourceContextProvider value={{}} {...props}>
      {children}
    </PlasmicDataSourceContextProvider>
  );
};

export default PlasmicGlobalContextsProviderComponent;
