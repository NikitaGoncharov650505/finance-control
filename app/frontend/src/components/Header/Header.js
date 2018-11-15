import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
    
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" style={{ color: "#fff"}}>Finance Control</NavbarBrand>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={this.props.handleLogout} color="secondary">Log out</Button>
                        </NavItem>                        
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
};

export default withRouter(Header);
