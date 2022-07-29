import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../img/logo_car2go1.png";

function Header() {
  const authCtx = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.headerContainer}>
      <header
        className={`${classes.header} ${showMenu ? classes.navOpen : null}`}
      >
        <Link to="/home" className={classes.logo}>
          <img src={logo} />
        </Link>
        <nav className={classes.mainNav}>
          <ul
            className={classes.mainNavList}
            onClick={() => setShowMenu(false)}
          >
            <li>
              <Link to="/home" className={classes.mainNavLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.mainNavLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/cars" className={classes.mainNavLink}>
                Rent a Car
              </Link>
            </li>
            <li>
              <Link to="/contact" className={classes.mainNavLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.mainNavBtn} onClick={() => setShowMenu(false)}>
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/new" className={classes.mainNavLink}>
                Add New Car
              </Link>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <Link
                to="/auth"
                className={`${classes.mainNavLink} ${classes.navBtnColor}`}
              >
                Log In
              </Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link
                to="/home"
                onClick={() => authCtx.logout()}
                className={`${classes.mainNavLink} ${classes.navBtnColor}`}
              >
                Logout
              </Link>
            </li>
          )}
        </div>
      </header>
      <button className={classes.btnMobile}>
        {!showMenu && (
          <GiHamburgerMenu
            size="3rem"
            className={classes.btnOpen}
            onClick={() => setShowMenu(true)}
          />
        )}
        {showMenu && (
          <IoCloseOutline
            size="3rem"
            className={classes.btnClose}
            onClick={() => setShowMenu(false)}
          />
        )}
      </button>
    </div>
  );
}

export default Header;
