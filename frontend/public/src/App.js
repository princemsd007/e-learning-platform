// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './components/CourseList';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CourseList} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
