import { useState } from 'react';

const useGroups = () => {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
};

export default useGroups;
