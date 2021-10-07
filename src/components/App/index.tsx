import { Redirect, Route, Switch } from 'react-router-dom';

import Login from 'screens/Login';
import Signup from 'screens/Signup';
import Home from 'screens/Home';
import 'scss/application.scss';

function App() {
  const isLoggedIn = false;

  return (
    <Switch>
      <Route path="/sign_up">{isLoggedIn ? <Redirect to="/" /> : <Signup />}</Route>
      <Route path="/">{isLoggedIn ? <Home /> : <Login />}</Route>
    </Switch>
  );
}

export default App;
