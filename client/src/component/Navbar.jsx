import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

//BookIcon
const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

//Navbar
const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/rooms" },
        { name: "Experience", path: "/" },
        { name: "About", path: "/" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(user);

    // Scroll Effect - FIXED
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== "/") {
                setIsScrolled(true);
            } else {
                setIsScrolled(window.scrollY > 10);
            }
        };

        handleScroll(); // Run on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Body Scroll Lock when menu open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
                ${isScrolled
                    ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
                    : "py-2 md:py-6"
                }`}
        >
            {/* Logo */}
            <Link to="/">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9 transition ${isScrolled ? "invert opacity-80" : ""}`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
                    >
                        {link.name}
                        <div
                            className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                        />
                    </Link>
                ))}

                <button className={`border px-4 py-1 text-sm font-light rounded-full transition ${isScrolled ? "text-black border-black" : "text-white border-white"}`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <svg
                    className={`h-6 w-6 transition ${isScrolled ? "text-black" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                {/* User info */}
                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="My Bookings"
                                labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button
                        onClick={openSignIn}
                        className={`px-8 py-2.5 rounded-full ml-4 transition ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {/* User info */}
                {user && (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="My Bookings"
                                labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-bookings")}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                )}

                <img
                    src={assets.menuIcon}
                    onClick={() => setIsMenuOpen(true)}
                    className="h-6 w-6 cursor-pointer"
                    alt="menu"
                />
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} className="h-4" alt="close" />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full border-black">
                    Dashboard
                </button>

                {!user && (
                    <button
                        onClick={openSignIn}
                        className="bg-black text-white px-8 py-2.5 rounded-full"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;