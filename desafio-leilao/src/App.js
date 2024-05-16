// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routes from './routes'
function App() {
  console.log(routes)
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} 
                path={route.path} 
                element={route.element}/>
        ))}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
