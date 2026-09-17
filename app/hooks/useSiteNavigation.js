"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useSiteNavigation() {
  const pathname = usePathname() || "/";
  const [path, setPath] = useState(pathname);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect(() => {
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
