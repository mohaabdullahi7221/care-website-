"use client";

import { useEffect, useState } from "react";

export function useSiteNavigation() {
  const [path, setPath] = useState("/");
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
    const onPopState = () => setPath(location.pathname);
    const onScroll = () => setShowToTop(scrollY > 500);
    addEventListener("popstate", onPopState);
    addEventListener("scroll", onScroll);
    return () => {
      removeEventListener("popstate", onPopState);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  function go(to) {
    history.pushState({}, "", to);
    setPath(to);
    scrollTo({ top: 0, behavior: "smooth" });
  }

  return { path, go, showToTop };
}
