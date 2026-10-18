import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Smooth-scrolls to a hash target after route navigation lands on Home.
export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
}