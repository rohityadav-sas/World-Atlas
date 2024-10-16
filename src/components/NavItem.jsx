import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, icon, children, onClick }) => (
    <NavLink
        to={to}
        className="flex items-center gap-2 text-gray-200 hover:text-gray-400 inactive"
        onClick={onClick}
    >
        {icon}
        <span>{children}</span>
    </NavLink>
);

export default React.memo(NavItem);
