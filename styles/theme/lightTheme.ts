import { createTheme } from '@mui/material/styles';


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fff',
            paper: '#2f4358'
        },
        primary: {
            main: '#fff',
            contrastText: '#224b92',
            dark: '',
            light: ''
        },
        secondary: {
            main: '#fff',
            contrastText: '#46c6f7',
            dark: '',
            light: ''
        },
        text: {
            disabled: '#8393a3',
        },
        action: {
            disabled: '#8393a3',
            hover: '#f1f1f1'
        },
    },
});


export default lightTheme;