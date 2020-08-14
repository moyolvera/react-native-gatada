import { useState } from 'react';

const useCompetitors = () => {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
};

export default useCompetitors;
