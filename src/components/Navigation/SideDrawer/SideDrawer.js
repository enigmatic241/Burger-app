import React from 'react';

import Logo from '../../../containers/Logo/Logo ';
import NavigationItems from '../Navigationitems/Navigationitems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';



const sideDrawer = (props) => {
    const openClass = {
        transform: "translateX(0)"
    };
    const closeClass = {
        transform: " translateX(-100%)"
    };
    let attachedclass = closeClass;
    
    if(props.open){
        attachedclass =  openClass;
    }

    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div  className="SideDrawer" style={attachedclass}>

            <Logo height="11%" />
            <nav>
            <NavigationItems />
            </nav>
        </div>
        </Aux>
    );

};

export default sideDrawer;