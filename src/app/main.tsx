import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'jotai';
import { myStore } from '@/store/store';

import Home from '@/app/home/Home.jsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={myStore}>
      <Home />
    </Provider>
  </StrictMode>,
);
