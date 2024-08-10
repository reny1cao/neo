import React from 'react';
const APP_VERSION = import.meta.env.VITE_APP_VERSION;

const App = () => (
  <div>
    <h1>App version: {APP_VERSION}</h1>
    <h1>Welcome to NeoMin</h1>
    <p>A modern, AI-enhanced web browser</p>
  </div>
);

export default App;
