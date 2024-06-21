// src/App.js
import React from 'react';
import SurveyForm from './components/SurveyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mt-8">Survey Form App</h1>
      </header>
      <main className="mt-8">
        <SurveyForm />
      </main>
    </div>
  );
}

export default App;
