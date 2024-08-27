import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  return ( <div className='goal-list'>
    <h2>Course Goals</h2>
    <GoalList />
  </div>
  );

};

export default App;
