import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import reset from './styles/reset';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={reset} />
                <div>Page</div>
            </ThemeProvider>
        </>
    );
}

export default App;
