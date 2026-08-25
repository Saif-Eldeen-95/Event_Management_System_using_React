import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
                    EventHub
                </NavLink>

                <button
                    type="button"
                    className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/create-event"
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            Create Event
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-events"
                            className={({ isActive }) =>
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            My Events
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
