import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { SiGoogleearth } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const NavItem = ({ to, icon, children }) => (
        <NavLink
            to={to}
            className={`flex items-center gap-2 text-gray-200 hover:text-gray-400 inactive`}
            onClick={() => setIsOpen(false)}
        >
            {icon}
            <span>{children}</span>
        </NavLink>
    );

    return (
        <header className="bg-surface-0 py-6 font-semibold px-4 p-clamp-sm lg:p-clamp-lg flex justify-between items-center text-gray-200">
            <div className="flex gap-4 items-center text-2xl">
                <SiGoogleearth className="text-4xl text-primary-30 animate-glow rounded-full" />
                <span>WorldAtlas</span>
            </div>

            {/* Hamburger Menu for mobile */}
            <button
                className="text-4xl cursor-pointer transition-all lg:hidden"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <GiHamburgerMenu />
            </button>

            {/* Mobile Menu (Sheet) with transition */}
            <div
                ref={menuRef}
                className={`fixed inset-y-0 right-0 bg-surface-20 p-10 flex flex-col gap-6 z-50 transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                <nav className='flex flex-col gap-10 py-10'>
                    <NavItem to="/" icon={<MdHome className="text-2xl" />}>Home</NavItem>
                    <NavItem to="/about" icon={<MdOutlinePlace className="text-xl" />}>About</NavItem>
                    <NavItem to="/contact" icon={<IoMdCall className="text-xl" />}>Contact</NavItem>
                </nav>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
                <NavItem to="/" icon={<MdHome className="text-2xl" />}>Home</NavItem>
                <NavItem to="/about" icon={<MdOutlinePlace className="text-xl" />}>About</NavItem>
                <NavItem to="/contact" icon={<IoMdCall className="text-xl" />}>Contact</NavItem>
            </nav>
        </header>
    );
}
