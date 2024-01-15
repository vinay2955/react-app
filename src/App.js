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
import ParentContext from './ContextPractice/ParentContext'



function App() {
  return (

    <div>
      <ParentContext/>
    </div>
  //   <BrowserRouter>
  //   <Header/>
  // <Routes>
  //       <Route path="/" element={<Home />}></Route>
  //       <Route path="about" element={<About />}></Route>
  //       <Route path="contactus" element={<ContactUs />}></Route>
  //       <Route path="*" element={<PageNotFound />}></Route>
  //     </Routes>
  //   </BrowserRouter>
  );
}

export default App;
