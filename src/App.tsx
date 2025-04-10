import React from 'react';
import AppRoutes from './Routes/Routes';
import './Styles/Theme.module.css';
import { AuthProvider } from './Contexts/AuthContext';
import { ShoppingBagProvider } from './Contexts/ShoppingBagContext';

function App() {
  return (
    <AuthProvider>
      <ShoppingBagProvider>
        <div>
          <AppRoutes />
        </div>
      </ShoppingBagProvider>
    </AuthProvider>
  );
}

export default App;