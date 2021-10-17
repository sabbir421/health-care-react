

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/log-in/Login';

function App() {
  return (
    <div className="">
       <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
        </Switch>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
