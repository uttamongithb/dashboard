import React from 'react';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 p-4">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
