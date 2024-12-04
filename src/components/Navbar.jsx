import { useState } from "react";

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    return(
        <div className="navbar container">
            <a href="#!" className="logo">Foodies</a>
            <div className="nav-links">
                <a href="#!" className="active">Home</a>
                <a href="#!">About</a>
                <a href="#!">Settings</a>
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn" }>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}


