import { Global, ThemeProvider } from '@emotion/react';

import Layout from './layout/Layout';
import reset from './styles/reset';
import { theme } from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={reset} />
                <Layout>Page</Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
