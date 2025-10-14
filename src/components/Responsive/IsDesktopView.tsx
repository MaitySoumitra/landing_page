import { useState, useEffect } from "react";

export default function useIsDesktop(breakpoint: number = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}
