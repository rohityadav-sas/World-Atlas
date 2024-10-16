import React, { useState, useEffect } from 'react';
import { SiGoogleearth, GiHamburgerMenu, MdHome, MdOutlinePlace, IoMdCall } from '../../utils/icons';
import NavItem from '../../components/NavItem';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    useEffect(() => setIsOpen(false), [location.pathname]);

    return (
        <header className="bg-surface-0 py-6 font-semibold px-4 p-clamp-sm lg:p-clamp-lg flex justify-between items-center text-gray-200">
            {/* Logo and Title */}
            <div className="flex gap-4 items-center text-2xl">
                <SiGoogleearth className="text-4xl text-primary-30 animate-glow rounded-full" />
                <span>WorldAtlas</span>
            </div>

            {/* Hamburger Menu for mobile */}
            <button
                className="text-4xl transition-all lg:hidden"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <GiHamburgerMenu />
            </button>

            {/* Mobile Menu */}
            <div
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

export default React.memo(Header);
