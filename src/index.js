import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import { Global } from 'styles/global.styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Global/>
  </>
);
