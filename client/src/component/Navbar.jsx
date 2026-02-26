import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

// Book Icon
const BookIcon = () => (
    <svg
        className="w-4 h-4 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
        />
    </svg>
);

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

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== "/") {
                setIsScrolled(true);
            } else {
                setIsScrolled(window.scrollY > 10);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 transition-all duration-500 z-50 ${isScrolled ? "bg-white shadow-md py-3" : "py-4"
                }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <span
                    className={`text-xl md:text-2xl font-semibold transition ${isScrolled ? "text-black" : "text-white"
                        }`}
                >
                    QuickStay
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`transition ${isScrolled ? "text-black" : "text-white"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <button
                    className={`border px-4 py-1 rounded-full cursor-pointer transition ${isScrolled
                            ? "text-black border-black"
                            : "text-white border-white"
                        }`}
                >
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* Search Icon */}
                <svg
                    className={`h-6 w-6 cursor-pointer transition ${isScrolled ? "text-black" : "text-white"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

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
                        className={`px-6 py-2 rounded-full cursor-pointer transition ${isScrolled
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Section */}
            <div className="flex items-center gap-4 md:hidden">
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

                {/* Menu Icon */}
                <svg
                    onClick={() => setIsMenuOpen(true)}
                    className={`w-7 h-7 cursor-pointer transition ${isScrolled ? "text-black" : "text-white"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-medium transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    className="absolute top-6 right-6 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                >
                    ✕
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer"
                    >
                        {link.name}
                    </Link>
                ))}

                {!user && (
                    <button
                        onClick={openSignIn}
                        className="bg-black text-white px-6 py-2 rounded-full cursor-pointer"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;