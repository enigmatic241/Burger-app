import React, { Component } from 'react';
import './Toolbar.css';
import Logo from '../../../containers/Logo/Logo ';
import NavigationItems from '../Navigationitems/Navigationitems';
import Aux from '../../../hoc/Aux';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';


class Toolbar extends Component {
    
    render () {
        return(
        <Aux>            
            
            <header className="Toolbar">
                <DrawerToggler clicked={this.props.drawerToggleClicked} />
            <Logo height="80%"/>
            <nav className="DesktopOnly">
            <NavigationItems />
            </nav>
        </header>
        </Aux>

        );
    }
}

export default Toolbar;
