import './App.css';
import { useState } from 'react';
import CompA from './components/sub/CompA';
import CompC from './components/sub/CompC';
import { DataContext } from './components/DataContext';

function App() {

  const [userInfo, setUserInfo] = useState({
    name : 'Mei',
    favColor: 'blue',
    favFood: 'pizza',
    favMovie: 'Harry Potter'
  })

  return (
    <div className="App">
      <DataContext.Provider value={{userInfo, setUserInfo}}>
        <CompA/>
        <CompC/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
