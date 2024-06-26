import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const skyfeedBlue: MantineColorsTuple = [
  '#defdff',
  '#cbf4ff',
  '#9be6fd',
  '#68d7f9',
  '#3ecbf6',
  '#22c4f5',
  '#00c0f5',
  '#00a9db',
  '#0097c5',
  '#0083af'
];

const theme = createTheme({
  colors: {
    skyfeedBlue,
  }
});

export default theme;
