import React from 'react';

import './Navigationitems.css';
import NavigationItem from './Navigationitem/Navigationitem';

const navigationItems =(props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        <NavigationItem link="/">Orders</NavigationItem>
    </ul>

);

export default navigationItems;

