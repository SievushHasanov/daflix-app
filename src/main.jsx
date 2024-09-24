import { CssBaseline } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './main.css';
import 'bear-react-carousel/dist/index.css';

import { store } from './app/store';
import App from './components/App';
import ToggleColorMode from './context/ToggleColorMode';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToggleColorMode>
      <CssBaseline />
      <App />
    </ToggleColorMode>
  </Provider>,
);
