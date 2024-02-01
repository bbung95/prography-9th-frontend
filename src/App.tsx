import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Layout from './layout/Layout';
import reset from './styles/reset';
import { theme } from './styles/theme';

function App() {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Global styles={reset} />
                    <Layout>
                        <Header />
                    </Layout>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
