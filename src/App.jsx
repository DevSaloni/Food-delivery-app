import "./App.css";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import DeliveryBookPanel from "./component/DeliveryBookPanel";
import SearchPage from "./pages/searchPage";
import BookFood from "./pages/BookFood";
import About from "./pages/About";
import OrderDetail from "./pages/OrderDetail";
import Contact from "./pages/contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Team from "./pages/Team";
const App = () => {
  return (
    <Router>
    <Toaster/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="#" element={<NotFound/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/searchPage" element={<SearchPage/>}></Route>
      <Route path="/order" element={<BookFood/>}></Route>
      <Route path="/myorder" element={<OrderDetail/>}></Route>

      <Route path="/about" element={<About/>}></Route>
      <Route path="/order-detail" element={<OrderDetail/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/team" element={<Team/>}></Route>








      </Routes>
    </Router>
    
  )
}

export default App