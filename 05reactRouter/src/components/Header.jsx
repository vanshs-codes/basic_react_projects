import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg"

export default function Header() {
    return (
        <>
            <header className="w-full bg-black shadow p-4 lg:p-10 sticky top-0 z-50 border-white border-b">
                <nav className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
                    <div className="p-4">
                        <Link to="/" className="">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    
                    <div className="text-white p-4">
                        <ul className="flex flex-wrap gap-x-12">
                            <li>
                                <NavLink to="/"
                                className={({ isActive }) => isActive ? "text-blue-950" : ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                className={({ isActive }) => isActive ? "text-blue-950" : ""}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github"
                                className={({ isActive }) => isActive ? "text-blue-950" : ""}>
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap text-white gap-x-6 p-4">
                        <Link to="#">
                            Log In
                        </Link>
                        <Link to="#">
                            Register
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

