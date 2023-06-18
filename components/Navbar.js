import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
     
      <div className="menu-icon" onClick={handleMenuClick}>
        <i className="fa fa-bars"></i>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li>
          <Link href="/">
           Home
          </Link>
        </li>
        <li>
          <Link href="/about">
           About
          </Link>
        </li>
        <li>
          <Link href="/contact">
           Contact
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #222;
          color: #fff;
        }

        .logo a {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
        }

        .menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin-left: 1rem;
        }

        .menu a {
          color: #fff;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }

          .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 4rem;
            left: 0;
            width: 100%;
            background-color: #222;
            padding: 1rem;
            z-index: 1;
          }

          .menu.show {
            display: flex;
          }

          .menu li {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;