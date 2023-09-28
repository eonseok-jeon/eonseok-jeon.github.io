import { useEffect, useState } from 'react';

/** 스크롤에 따른 Nav fixed */
const useStickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  const stickyNav = () => {
    const stickyStartPoint = window.innerHeight - 80;

    if (window !== undefined) {
      window.scrollY > stickyStartPoint ? setIsSticky(true) : setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyNav);

    return () => window.removeEventListener('scroll', stickyNav);
  }, []);

  return { isSticky };
};

export default useStickyNav;
