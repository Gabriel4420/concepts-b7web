// components/ToastProvider.tsx
'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Estilos personalizados com Tailwind CSS
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
    />
  );
}
