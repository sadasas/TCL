"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";


export default function QueryProvider({ children }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
