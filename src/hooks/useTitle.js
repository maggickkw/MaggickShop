import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
document.title = `${title} - MaggickShop`
  }, [title])
  return null;
};
