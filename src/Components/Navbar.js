import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const Navdata = [
    {
      item: 'Home',
      cName: 'navitem',
      path: '/Home',
    },
    {
      item: 'About',
      cName: 'navitem',
      path: '/About',
    },
    {
      item: 'Contact',
      cName: 'navitem',
      path: '/Contact',
    },
    {
      item: 'Collection',
      cName: 'navitem',
      path: '/collection',
    },
  ];

  return (
    <div>
      <ul className="nav_strip">
        {Navdata.map((Element, index) => {
          return (
            <div className="navbar_items">
              <li className="nav_lists" key={index}>
                <Link className="navitem" to={Element.path}>
                  {Element.item}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
