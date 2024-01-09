import logo from './logo.svg';
import './App.css';
//import ParentProduct from './Components/ParentProduct';
//import Practice from './Components/ClassComponents';
//import FunctionComponent from './Components/FunctionComponents'
//import ParentComponent from './Components/ParentComponent';
//import ParentProduct from './DiscountMarket/ParentProduct';
//import LifeCycleMethods from './LifeCycleMethods/LifeCycleMethods';
//import Login from './Login/Login';
//import Form from './FormHandling/Form';
//import LoginForm from './FormHandling/LoginForm';
//import LoginForm from './FormHandling/LoginForm';
//import TemperatureConvert from './Temperature/TemperatureConvert';
//import TshirtFilter from './TshirtFilter/TshirtFilter';
//import ParentLifeCycleMethod from './LifeCycleMethods/ParentLifeCycleMethod';
//import ShouldComponentUpdate from './LifeCycleMethods/ShouldComponentUpdate';
//import PurComponent from './LifeCycleMethods/PurComponent';
//import Accordian from './Accordian/Accordian';
import Header from './Routing/Header';
import { BrowserRouter as Routing } from 'react-router-dom';
import Routers from './Routing/Routers';


function App() {
  return (
    <Routing>
  <div>
    <Header/>
    <Routers/>
    </div>
    </Routing>
  );
}

export default App;
