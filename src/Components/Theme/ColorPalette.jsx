import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';



// const Theme = (mode) => ({
//   status: {
  
//     danger: '#e53e3e',
  
//   },
//   palette: {
//     mode,
//     ...(mode === 'light'
//           ? {
//               // palette values for light mode
//               primary: {
//                 main: '#9AB7A7',
//                 darker: '#266041',
//               },
//               secondary:{
//                 main: '#ffde84',
//                 darker: '#F3C74A',
//             },
//               divider: '#F3C74A',
//               darker: '#266041',
//               neutral: {
//                 main: '#64748B',
//                 contrastText: '#fff',
//               },
//               text: {
//                 primary:'#F3C74A',
//                 secondary: '#F3C74A',
//               },
//             }
//           : {
//               // palette values for dark mode
              
//               primary: '#266041',
//               secondary:'#F3C74A',
//               divider: '#F3C74A',
//               background: {
//                 default: '#F3C74A',
//                 paper: '#F3C74A',
//               },
//               text: {
//                 primary: '#fff',
//                 secondary: '#F3C74A',
//               },
//             }),
//       },


// });






const Theme = (mode) => ({
  palette: {
    mode,
    primary: {
   
      main:grey[700],
      ...(mode === 'dark' && {
        main: '#F4F4E9',
      }),
    },
    secondary: {
      main:grey[400],
      ...(mode === 'dark' && {
        main: '#f7eab7',
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#266041',
        paper: '#9AB7A7',
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
      ...(mode === 'dark'
          ? {
              primary: '#F7F9FA',
              secondary: '#F7F9FA',
            }
          : {
              primary: '#F7F9FA',
              secondary:'#F7F9FA',
            }),
    },
  },
});


export default Theme;