import logo from "./logo.svg";
import "./App.css";
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
//import Header from "./Routing/Header";
//import { BrowserRouter, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";
//import Home from './Routing/Home';
//import About from './Routing/About';
//import ContactUs from './Routing/ContactUs';
//import PageNotFound from './Routing/PageNotFound';
//import ParentContext from './ContextPractice/ParentContext'
//import Post from './Routing/Post';
//import Routers from './Routing/Routers';
//import { useEffect, useState } from 'react';
//import Login from './Routing/Login';
//import ButtonCount from './HOC/ButtonCount';
//import HoverCount from './HOC/HoverCount';
//import ButtonCounter from './RenderProps/ButtonCounter'
//import MouseOver from './RenderProps/MouseOver'
//import Counter from './Reducer/Counter';
//import CounterInDec from './Reducer/CounterInDec';
//import CounterApi from './Reducer/CounterApi'
//import UserDetails from './Reducer/UserDetails';
//import UserMemo from './UseMemo/UserMemo';
import { Provider } from "react-redux";
//import store from "./ReduxLoginForm/store";
//import DisplayDataPage from "./ReduxLoginForm/displayData";
//import LoginFormData from "./ReduxLoginForm/LoginFormData";
//import store from "./UserRedux/store";
import { store } from "./MiddleWareSaga/store";
//import CounterUsingRedux from "./Redux/CounterUsingRedux";
//import Users from "./UserRedux/Users";
//import Prodcuts from "./UserRedux/products";
import ProdcutDetailsComp from "./MiddleWareSaga/ProdcutDetailsComp";
function App() {
  //const [isLoggedin, setIsLoggedin] = useState(false);
  //  useEffect(()=>{
  //cookies
  // if(document.cookie){
  //   const cookieArray = document.cookie.split('=')
  //   if(cookieArray[0] === 'isLoggedin' && cookieArray[1] === 'true'){
  //     setIsLoggedin(true)
  //   }
  // }

  //session storage

  // const localString = sessionStorage.getItem('login')
  // const login = JSON.parse(localString)
  // const currtime = new Date().getTime();
  // if(login && login.isLoggedin === true && login.expiry>currtime){
  //   setIsLoggedin(true)
  // }

  //localstorage

  // const localStorageValue = localStorage.getItem('login')
  // const login = JSON.parse(localStorageValue)
  // const currtime= new Date().getTime();
  // if(login && login.isLoggedin === true && login.expiry > currtime){
  //   setIsLoggedin(true)
  // }

  //  },[])
  return (
    <div>
      {/* feature branch test*/}
      <Provider store={store}>
        <ProdcutDetailsComp />
        {/* <Router>
          <Routes>
            <Route path="/display-data" element={<DisplayDataPage />} />
            <Route path="/" element={<LoginFormData />} />
          </Routes>
        </Router> */}
      </Provider>
      {/* <UserMemo /> */}
      {/* <UserDetails/> */}
      {/* <CounterApi/> */}
      {/* <CounterInDec/> */}
      {/* <Counter/> */}
      {/* <ButtonCounter/>
  <MouseOver/> */}
      {/* <BrowserRouter>
     <Header/>
    <Routers isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
     </BrowserRouter> */}
      {/* <ButtonCount/>
  <HoverCount/> */}
    </div>
    // <div>
    //   <ParentContext/>
    // </div>
  );
}

export default App;
