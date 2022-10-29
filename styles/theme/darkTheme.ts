import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1c2731',
            paper: '#141c24'
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
            hover: '#ffffff3b'
        },
    },
});


export default darkTheme;