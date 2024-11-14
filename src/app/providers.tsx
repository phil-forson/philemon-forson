// app/Providers.tsx
"use client";

import { ReactNode } from "react";
import ThemeProvider from "./providers/NextThemeProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
