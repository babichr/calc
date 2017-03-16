import React from "react";
import { Link } from "react-router";

const Header = () => {
    return(
        <header className="header navbar navbar-default">
            <div className="container">
                <p className="navbar-text">
                    <Link className="navbar-link" to="/">Home</Link>
                </p>
            </div>
        </header>
    )
};

export default Header;