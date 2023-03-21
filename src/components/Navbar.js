import "./styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="container">
            <div className="nav-items">
            <Link className="logo" to="/Homepage">JobsPortal</Link>
                <div className="btns">
                    <button className="login-btn">Login</button>
                    <button className="post-btn">Post a job</button>
                </div>
            </div>
        </div>
    )
}