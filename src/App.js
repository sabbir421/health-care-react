

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/log-in/Login';
import Services from './Components/Services/Services';
import AuthProvider from './Contexts/Context';

function App() {
  return (
    <div className="">
       <AuthProvider>
       <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
        </Switch>
       </BrowserRouter>
       </AuthProvider>
        
    </div>
  );
}

export default App;
