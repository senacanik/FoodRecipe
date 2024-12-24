import { useState } from "react";

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a href="#!" className="navbar-brand">Foodies</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showSidebar ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#!">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


