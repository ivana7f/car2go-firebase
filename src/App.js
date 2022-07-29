import React from "react";
import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./store/auth-context";
import AddCar from "./Components/AddCar/AddCar";
import AuthForm from "./Components/Auth/AuthForm";
import CarItem from "./Components/Cars/CarItem/CarItem";
import Cars from "./Components/Cars/Cars";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutPage from "./Components/pages/AboutPage/AboutPage";
import ContactPage from "./Components/pages/ContactPage/ContactPage";
import MainPage from "./Components/pages/MainPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <MainPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/cars" exact>
          <Cars />
        </Route>
        <Route path="/cars/:id">
          <CarItem />
        </Route>
        <Route path="/auth">
          <AuthForm />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/new">
            <AddCar />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
