import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList"
import NewProduct from "./pages/newProduct/NewProduct";
import HomeAdmin from "./pages/home/HomeAdmin"
import ProductListAdmin from "./pages/productListAdmin/ProductListAdmin";
import ProductAdmin from "./pages/productAdmin/ProductAdmin";
import User from "./pages/user/User"
function App() {
  const user = useSelector(state=> state.user.currentUser);
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
           <Route path="/products">
             <ProductList/>
          </Route>
          <Route path="/products/:category">
             <ProductList/>
          </Route>
          <Route path="/product/:id">
           <Product/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
             <Route path="/success">
            <Success/>
          </Route>
          <Route path="/login">
            {user? <Redirect to="/"/> :
            <Login/>
            }
          </Route>
          <Route path="/register">
              {user? <Redirect to="/"/> :
            <Register/>
          }
          </Route>
          <Route path="/user/:userId">
           { user? <User/> :<Redirect to="/"/>}
          </Route>
          {user &&  <>
        <Route  path="/admin">
        { user.isAdmin? <HomeAdmin/> :<Redirect to="/"/>}
        </Route>
        <Route path="/users">
          { user.isAdmin?  <UserList/>:<Redirect to="/"/>}
          </Route>
           <Route path="/newuser">
           {user.isAdmin?  <NewUser/> :<Redirect to="/"/>}
          </Route>
           <Route path="/adminprod">
           {user.isAdmin?  <ProductListAdmin/> :<Redirect to="/"/>}
          </Route>
          <Route path="/newproduct">
           { user.isAdmin? <NewProduct/> :<Redirect to="/"/>}
          </Route>
          <Route path="/productadmin/:productId">
           {user.isAdmin? <ProductAdmin/> :<Redirect to="/"/>}
          </Route>
        
          </>
          }
        
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
