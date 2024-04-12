'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      retry: 0,
      staleTime: 0,
    },
  },
});

export default function Provider({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
