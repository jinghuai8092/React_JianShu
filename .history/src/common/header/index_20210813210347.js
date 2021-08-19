import React, { Component } from 'react';
import {connect } from 'react-redux';
import {
    HeaderWrapper
    , Nav
    , NavItem
    , Logo
    , NavSearch
    , Addition
    , Button
    , SearchWrapper
} from './style'
import '../../status/iconfont/iconfont.css'
import { CSSTransition } from 'react-transition-group';

const Header=(props)=>{
    
}

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav >
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><i className="iconfont">&#xe708;</i>Write an Essay</Button>
                    <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    // handleInputFocus() {
    //     this.setState({
    //         focused: true
    //     })
    // }
    // handleInputBlur() {
    //     this.setState({
    //         focused: false
    //     })
    // }
}
const mapStateToProps =(state) =>{
    return {
        focused: state.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            const action={
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);