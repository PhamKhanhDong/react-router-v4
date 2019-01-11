import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name: 'Products list',
    to: '/products',
    exact: false
  },
  {
    name: 'Login',
    to: '/login',
    exact: false
  }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
      let active = match ? 'actice' : '';
      return (
        <li className={active}>
          <Link to={to}>{label}</Link>
        </li>
      );
    }}
    />
  );
}

export default class Menu extends Component {
  showMenu = () => {
    return(menus.map((menu, index)=>{
      return(
        <MenuLink 
          key={index} 
          label={menu.name} 
          to={menu.to} 
          activeOnlyWhenExact={menu.exact}
        />
      );
    }));
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenu()}
        </ul>
      </nav>
    );
  }
}