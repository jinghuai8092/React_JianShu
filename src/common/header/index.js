import React, { Component } from 'react';
import {
    HeaderWrapper
    , Nav
    , NavItem
    , Logo
    ,NavSearch
    ,Addition
    ,Button
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav >
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>An</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className='writting'>Write an Essay</Button>
                    <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
export default Header;