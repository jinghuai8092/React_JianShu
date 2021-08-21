import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper
    , Nav
    , NavItem
    , Logo
    , NavSearch
    , Addition
    , Button
    , SearchInfo
    , SearchInfoTitle
    , SearchInfoSwitch
    , SearchInfoList
    , SearchInfoItem
    , SearchWrapper
} from './style'
import '../../status/iconfont/iconfont.css'
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        Popular Searches
                        <SearchInfoSwitch>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

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
                        {
                            this.getListArea()
                        }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><i className="iconfont">&#xe708;</i>Write an Essay</Button>
                    <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>

        )
    }
}

// const getListArea = (show) => {
//     if (show) {
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     Popular Searches
//                     <SearchInfoSwitch>Change</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                     <SearchInfoItem>Education</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         )
//     } else {
//         return null;
//     }
// }

// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav >
//                 <NavItem className='left active'>Home</NavItem>
//                 <NavItem className='left'>Download App</NavItem>
//                 <NavItem className='right'>Login</NavItem>
//                 <NavItem className='right'><i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch
//                             className={props.focused ? 'focused' : ''}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</i>
//                 {
//                     getListArea(props.focused)
//                 }
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className='writting'><i className="iconfont">&#xe708;</i>Write an Essay</Button>
//                 <Button className='reg'>Register</Button>
//             </Addition>
//         </HeaderWrapper>

//     )
// }


const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);