import React, { useEffect } from "react";

const useScrollToTop = (value?: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);
};
export default useScrollToTop;
