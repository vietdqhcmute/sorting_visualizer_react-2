import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout'
import ChartBuilder from './containers/ChartBuilder/ChartBuilder'
function App() {
  return (
    <div className="App">
      <Layout>
        <ChartBuilder></ChartBuilder>
      </Layout>
    </div>
  );
}

export default App;
