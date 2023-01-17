import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        },  
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              color:'white',
            },
          },
        },
      },
});

export default theme;