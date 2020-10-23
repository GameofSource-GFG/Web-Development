import React, {Component} from "react";
import "../stylesheets/navbar.css";

// const handleClick = () => {
//     const icon = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".nav-links");
//     const links = document.querySelectorAll(".nav-links li");
//     icon.addEventListener("click", () => {
//         navLinks.classList.toggle("open");
//         links.forEach(Link => {
//             Link.classList.toggle("fade");
//         })
//     })
// }
class Navbar extends Component
{
    render()
    {
        return(
            <div>
                <nav>
                    <div className="logo">
                        <h1>SocialApe</h1>
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="/" className="links">Home</a></li>
                        <li><a href="/signIn" className="links">SignIn</a></li>
                        <li><a href="/SignUP" className="links">SignUp</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar


{/* <script>
        
    </script> */}