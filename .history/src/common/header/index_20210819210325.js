import React from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {
    HeaderWrapper
    , Nav
    , NavItem
    , Logo
    , NavSearch
    , Addition
    , Button
    ,SearchInfo
    ,SearchInfoTitle
    ,SearchInfoSwitch
    , SearchWrapper
} from './style'
import '../../status/iconfont/iconfont.css'
import { CSSTransition } from 'react-transition-group';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</i>
                <SearchInfo>
                    <SearchInfoTitle>
                            Popular Searches
                            <SearchInfoSwitch>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoItem>
                            
                        </SearchInfoItem>
                    </div>
                </SearchInfo>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'><i className="iconfont">&#xe708;</i>Write an Essay</Button>
                <Button className='reg'>Register</Button>
            </Addition>
        </HeaderWrapper>

    )
}


const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);