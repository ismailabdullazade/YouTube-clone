import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/login/LoginScreen";
import './_app.scss';

const Layout = ({ children }) => {

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(value => !value);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__container" >
        <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />

        <Container fluid className="app__main" >
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () => {



  return (

    <Router>
      <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen />
      </Route>

      <Route path='/search'>
        <Layout>
          <h1>Search</h1>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/'/>
      </Route>
      </Switch>
    </Router>
    /* <>
      <Header toggleSidebar={toggleSidebar} />

      <div className="app__container" >
        <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />

        <Container fluid className="app__main" >
          <HomeScreen />
        </Container>

      </div>
    </> */
    // <LoginScreen />
  );
}

export default App;
