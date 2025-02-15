'use client';

import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface TanstackQueryProviderProps {
    children: React.ReactNode;
}

const TanstackQueryProvider = ({ children }: TanstackQueryProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 60 * 1000,
                        gcTime: 5 * 60 * 1000,
                    },
                },
            }),
    );

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { TanstackQueryProvider };
