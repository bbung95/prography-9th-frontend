import { Global, ThemeProvider } from '@emotion/react';

import Header from './components/header/Header';
import Layout from './layout/Layout';
import reset from './styles/reset';
import { theme } from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={reset} />
                <Layout>
                    <Header />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
