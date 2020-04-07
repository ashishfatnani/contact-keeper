import React, { Fragment, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li><b>Hello {user && user.name}</b></li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm"><b>Logout</b></span>
        </a>
      </li>
    </Fragment>
  );  

  const guestLinks = (
    <Fragment>
      <ul className = "navbar-nav">
      <li className ="nav-item">
        <Link  to="/register"><b>Register</b></Link>
      </li>
      <li className ="nav-item">
        <Link to="/login"><b>Login</b></Link>
      </li>
      </ul>
    </Fragment>
  );

  return (
    <div className="navbar navbar-dark bg-dark">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "  Contact-keeper",
  icon: "far fa-address-book",
};

export default Navbar;
