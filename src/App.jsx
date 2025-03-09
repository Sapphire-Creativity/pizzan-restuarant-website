import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const Menu = lazy(() => import("./Pages/Menu"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Cart = lazy(() => import("./Pages/Cart"));
const FavouriteItems = lazy(() => import("./Components/FavouriteItems"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingAnimation from "./Lazyloading/LoadingAnimation";


const LazyLoad = ({ Component }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [Component]);

  return isLoading ? <LoadingAnimation /> : <Suspense fallback={<LoadingAnimation />}><Component /></Suspense>;
};

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulated delay
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs on every route change

  return (
    <>
      <Navbar />

      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Suspense fallback={<LoadingAnimation />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favourite-items" element={<FavouriteItems />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}

      <Footer />
    </>
  );
};

export default App;
