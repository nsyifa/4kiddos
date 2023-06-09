import { useEffect, useState } from "react";
import Home from "./pages/Home";
// import Test from "./pages/Test";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log(loggedInUser);
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    console.log("User updated", user);
  }, [user]);

  const updateUser = (customer) => {
    setUser(customer);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} updateUser={updateUser} />}>
        <Route index element={<Home user={user} />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="login" element={<Login updateUser={updateUser} />} /> */}
        <Route
          path="/login"
          element={
            user.cust_name ? (
              <Navigate to="/" />
            ) : (
              <Login updateUser={updateUser} />
            )
          }
        />
        <Route path="cart" element={<Cart user={user} />} />
        <Route path="checkout" element={<Checkout user={user} />} />
        <Route path="payment" element={<Payment user={user} />} />
        <Route path="products" element={<Products />} />
        <Route
          path="/products/product-detail"
          element={<ProductDetail user={user} />}
        />
        {/* <Route path="test" element={<Test />} /> */}
        <Route
          path="products/0-2years"
          element={
            <Products
              filter={{
                categories: [],
                ages: ["0-2"],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/3-6years"
          element={
            <Products
              filter={{
                categories: [],
                ages: ["3-6"],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/7-10years"
          element={
            <Products
              filter={{
                categories: [],
                ages: ["7-10"],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/10years"
          element={
            <Products
              filter={{
                categories: [],
                ages: ["10+"],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/action-figures-playsets"
          element={
            <Products
              filter={{
                categories: ["action figures & playsets"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/baby-toddler-preschool"
          element={
            <Products
              filter={{
                categories: ["baby, toddler, & preschool learning toys"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/building-sets-blocks"
          element={
            <Products
              filter={{
                categories: ["building sets & blocks"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/dolls-collectibles-stuffed-animals"
          element={
            <Products
              filter={{
                categories: ["dolls, collectibles, and stuffed animals"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/games-puzzles"
          element={
            <Products
              filter={{
                categories: ["games & puzzles"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/kids-arts-crafts"
          element={
            <Products
              filter={{
                categories: ["kids arts and crafts"],
                ages: [],
                brands: [],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/lego"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["lego"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/barbie"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["barbie"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/funko"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["funko"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/play-doh"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["play-doh"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/marvel"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["marvel"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/disney"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["disney"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/hot-wheels"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["hot wheels"],
                prices: [],
              }}
            />
          }
        />
        <Route
          path="products/others"
          element={
            <Products
              filter={{
                categories: [],
                ages: [],
                brands: ["others"],
                prices: [],
              }}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
