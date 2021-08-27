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
        const {focused,list,page,handleMouseEnter}=this.props;
        // console.log(list);
        const jsList=list.toJS();
        const pageList=[];
        for(let i=((page-1)*10);i<page*10;i++){
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
        if (focused) {
            return (
                <SearchInfo onMouseEnter={()=>
                    {handleMouseEnter}
                }>
                    <SearchInfoTitle>
                        Popular Searches
                        <SearchInfoSwitch>Change</SearchInfoSwitch>
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
        const {focused,handleInputFocus,handleInputBlur}=this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe633;</i>
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
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page'])
        // pageList: state.getIn(['header','pageList']),


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
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);