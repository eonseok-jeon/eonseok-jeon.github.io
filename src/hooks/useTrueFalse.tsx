import { useState } from 'react';

/** true, false state 관리 */
const useTrueFalse = () => {
  const [isTrue, setIsTrue] = useState(false);

  const makeTrue = () => {
    setIsTrue(true);
  };

  const makeFalse = () => {
    setIsTrue(false);
  };

  return { isTrue, makeTrue, makeFalse };
};

export default useTrueFalse;
