import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Redirect to="/" />
        </Switch>
        <Footer/>
      
    </>
  );
}

export default App;
