import "./App.css";
import Home from "./components/Home";
import Login from "./Auth Components/Login";
import { HashRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import Profile from "./Other Components/Profile";
import Register from "./Auth Components/Register";
import EditProfile from "./Other Components/EditProfile";
import { createContext, useEffect, useState } from "react";
import Visituser from "./Other Components/Visituser";

const UserContext = createContext(null)
export { UserContext };

function App() {
  const [user, setuser] = useState([]);
  const [userexist, setuserexist] = useState(false);
  const [userId, setuserId] = useState('');
  const [visituser,setvisituser] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setuser(JSON.parse(localStorage.getItem('user')))
    }
    if (localStorage.getItem('userId')) {
      setuserId(localStorage.getItem('userId'))
    }
    if (localStorage.getItem('userexist')==='true') setuserexist(true);
    else setuserexist(false);
  }, [localStorage.getItem('userexist')])
  useEffect(()=>{
    setvisituser(JSON.parse(localStorage.getItem('visituser')));
  },[localStorage.getItem('visituser')])
  return (
    <div className="App">
      {userexist === true ?
        <Router>
          <Switch>
            <UserContext.Provider value={{ user, setuser, userexist, setuserexist, userId, setuserId ,visituser,setvisituser }} >
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/edit_profile' component={EditProfile} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/user_profile' component={Profile} />
              <Route exact path='/visit_user' component={Visituser} />

              <Route exact path='/' component={Login} />
            </UserContext.Provider>
          </Switch>
        </Router>
        :
        <Router>
          <Switch>
            <UserContext.Provider value={{ user, setuser, userexist, setuserexist, userId, setuserId }} >
              <Route exact path='/login' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/edit_profile' component={Login} />
              <Route exact path='/Home' component={Login} />
              <Route exact path='/user_profile' component={Login} />
              <Route exact path='/visit_user' component={Login} />

            </UserContext.Provider>
          </Switch>
        </Router>
      }

      {/* <Home /> */}
    </div>
  );
}

export default App;
