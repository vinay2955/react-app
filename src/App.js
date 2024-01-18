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
import { BrowserRouter  } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './Routing/Home';
import About from './Routing/About';
import ContactUs from './Routing/ContactUs';
import PageNotFound from './Routing/PageNotFound';
//import ParentContext from './ContextPractice/ParentContext'
import Post from './Routing/Post';
import Routers from './Routing/Routers';
import { useState } from 'react';



function App() {
   const [isLoggedin, setIsLoggedin] = useState(false);
  return (

    // <div>
    //   <ParentContext/>
    // </div>
    <BrowserRouter>
    <Header/>
    <Routers isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    </BrowserRouter>
  );
}

export default App;
