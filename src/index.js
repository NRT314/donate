// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// 1. Получите projectId на https://cloud.walletconnect.com
// Это обязательно для работы RainbowKit v1+
const projectId = 'c2ddfb7c663b6494c5c0cfdb7e0f9e6a';

const config = getDefaultConfig({
  appName: 'NRT Donate',
  projectId: projectId,
  chains: [polygon],
  // Дополнительные настройки, если нужны
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);