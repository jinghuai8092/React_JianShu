import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import {actionCreators} from './store'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80" />
                    <Topic />
                    <List />

                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);