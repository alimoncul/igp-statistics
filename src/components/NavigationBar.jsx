import React from 'react';
import { Link } from 'react-router-dom';
export const navigation = [
    { name: 'Strategies', href: '/strategies' },
    { name: 'Setups', href: '/setups' },
    { name: 'Race Results', href: '/race-results' },
    { name: 'Race Analysis', href: '/race-analysis' }
];

export const NavigationBar = (...props) => {
    const aGenerator = ({ name, href }) => {
        const current = href === window.location.pathname;
        let baseClass = 'text-white px-3 py-2 rounded-md text-sm font-medium';
        baseClass += current ? ' bg-green-700' : ' hover:bg-green-800';
        return (
            <Link key={name} to={href} className={baseClass} aria-current={current ? 'page' : 'false'}>
                {name}
            </Link>
        );
    };
    return (
        <nav className="bg-green-900">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden flex-grow sm:block sm:ml-6">
                        <div className="flex space-x-4 justify-center mr-16">
                            <h1 className="lg:block h-auto w-auto flex-shrink font-bold text-white text-lg font-sans self-center antialiased ">
                                <Link to="/">iGP Statistics</Link>
                            </h1>
                            {navigation.map((nav) => aGenerator(nav))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
