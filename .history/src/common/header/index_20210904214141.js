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
import { Link } from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store';

class Header extends Component {
    getListArea() {
        const { focused, list, totalPage, mouseIn, page, handleMouseEnter, handleMouseLeave, handChangePage } = this.props;
        // console.log(list);
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length) {
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter=
                    {handleMouseEnter}
                    onMouseLeave={
                        handleMouseLeave
                    }>
                    <SearchInfoTitle>
                        Popular Searches
                        <SearchInfoSwitch onClick={
                            () => handChangePage(page, totalPage, this.spinIcon)
                        }>                        <i ref={(icon) => { this.spinIcon = icon }} className={'iconfont spin'}>&#xe606;</i>
                            Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                            // console.log(this.props.list)
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav >
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {
                        login ?
                         <NavItem className='right' onClick ={this.props.logout}>Exit</NavItem> :
                          <Link to='/login'> <NavItem className='right'>Login</NavItem></Link>
                    }
                    <NavItem className='right'><i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe633;</i>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
        // pageList: state.getIn(['header','pageList']),


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            if (originAngle < 999) {
                spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            } else {
                spin.style.transform = 'rotate(0deg)';
            }
            console.log(originAngle)
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }
            else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);