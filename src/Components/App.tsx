import React from 'react';
import routes from "routes";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Notes from 'Routes/Notes';
import Note from 'Routes/Note';
import Add from 'Routes/Add';
import Edit from 'Routes/Edit';
import HomeBtn from "Components/HomeBtn";

const App: React.SFC = () => {
  return (
    <Router>
      <HomeBtn />
      <Switch>
        <Route path={routes.home} exact component={Notes} />
        <Route path={routes.note()}  component={Note} />
        <Route path={routes.add}  component={Add} />
        <Route path={routes.edit()}  component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
