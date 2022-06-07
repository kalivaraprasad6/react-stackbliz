import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Axios from './Axios';
import Todos from './Todos';
import Custom_Hook from './Custom_Hook';
import Gallery from './Gallery';
import NavRoute from '../src/Components/NavRoute';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <NavRoute />
  </StrictMode>
);
