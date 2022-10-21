import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Routes ,Switch,Route } from 'react-router-dom'
import Home from "./Pages/Home"
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';


function App() {
  return (
    <Routes>
     <div className="App">
     <ToastContainer position='top-center'/>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/addUser" component={AddEdit}/>
      <Route  path="/update/:id" component={AddEdit}/>
      <Route  path="/view/:id" component={View}/>
     </Switch>
     </div>
    </Routes>

  );
}

export default App;
