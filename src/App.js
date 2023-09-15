import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import '../src/assets/styles/globals.css';
import '../src/assets/styles/react-slick.css';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </SnackbarProvider>
        </StyledEngineProvider>
    );
};

export default App;
