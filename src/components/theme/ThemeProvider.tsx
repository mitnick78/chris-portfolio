"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/stores/theme-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const hydrate = useThemeStore((state) => state.hydrate);

  useEffect(() => {
    hydrate(); // Applique le thème stocké au montage initial
  }, [hydrate]);

  return <>{children}</>;
}
