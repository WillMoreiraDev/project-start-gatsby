import React from 'react';
import { ThemeProvider }  from 'styled-components';

import themeDefault from '../src/styles/theme'

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={themeDefault}>{element}</ThemeProvider>;
}