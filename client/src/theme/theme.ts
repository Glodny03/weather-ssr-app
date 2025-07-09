import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'

let theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.default,
          color: palette.text.primary,
          fontFamily: 'Montserrat, sans-serif',
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        },
        a: {
          color: palette.primary.main,
          textDecoration: 'none'
        },
        h1: { marginBottom: '1rem' },
        h2: { marginBottom: '0.75rem' },
        h3: { marginBottom: '0.5rem' },
        p: { marginBottom: '1rem' }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          backgroundColor: '#fff'
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          padding: '8px 24px',
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600
        })
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: 8
        }
      },
      defaultProps: {
        variant: 'outlined'
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width:600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text.primary
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
        }
      }
    }
  }
})

export default responsiveFontSizes(theme)
