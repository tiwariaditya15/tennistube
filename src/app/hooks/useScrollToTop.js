import { useLayoutEffect } from "react";

export function useScrollToTop(videoId) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);
}
