import { useState } from 'react';

const useDetail = () => {
  const [isLoading] = useState(false);

  return {
    isLoading,
  };
};

export default useDetail;
