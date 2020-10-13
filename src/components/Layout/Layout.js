import React , { Component } from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showsideDrawer : false
    }
    sideDrawerClosedHandler =() => {
       this.setState({showsideDrawer: false}); 
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {

            return { showsideDrawer : !prevState.showSideDrawer};

        });
    }

render(){
        return(

    <Aux>  
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
        open={this.state.showsideDrawer}
        closed={this.sideDrawerClosedHandler} />

        <main >
            {this.props.children}
        </main>
    </Aux>
        );
    }
}

export default Layout;

