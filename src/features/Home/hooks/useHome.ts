import { useState } from 'react';

const useHome = () => {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
};

export default useHome;
