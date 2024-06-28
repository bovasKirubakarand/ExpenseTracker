import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './Components/Header';
import Etable from './Components/Etable';
import Report from './Components/Report';
import './App.css';

function App() {
  const [view, setView] = useState('main');

  const generateReport = () => {
    setView('report');
  };

  const goBack = () => {
    setView('main');
  };

  return (
    <Provider store={store}>
      <div>
        {view === 'main' ? (
          <>
            <Header generateReport={generateReport} />
            <Etable />
          </>
        ) : (
          <Report goBack={goBack} />
        )}
      </div>
    </Provider>
  );
}
export default App;
