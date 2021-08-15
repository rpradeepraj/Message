import { HashRouter, Route, Switch ,Router } from "react-router-dom";

import Login from './Login';
import Message from './Message';

import React, { useState } from "react";


function App() {

  const [logged, setLog] = useState(false);

  const routes = [
    { path: "/", component: <Login logged={logged} setLog={setLog}/> },
    { path: "/Message", component: <Message logged={logged} /> },
  ];

  const getRoutes = () => {
    if (logged) {
        return (
            <Switch>
                <Route exact path="/">{routes[1].component}</Route>
            </Switch>
        )
        
    } else {
        return (<Route path="*">{routes[0].component}</Route>);
    }
   
  }
  
  return (
    <HashRouter>
      {getRoutes()}
    </HashRouter> 
  );
}

export default App;
