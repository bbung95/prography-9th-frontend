import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './components/routes/Router';
import reset from './styles/reset';
import theme from './styles/theme';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
            },
        },
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <Global styles={reset} />
                    <Router />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
