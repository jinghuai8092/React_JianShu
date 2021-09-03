import React, { Component } from 'react';
import {
    ListItem,
    ListInfo
} from '../style';
import {connect, content }from 'react-redux';

class List extends Component {
    render() {
        return (
            <ListItem>
                <img className='pic' src="https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg"/>
                <ListInfo>
                    <h3 className='title'>This is the Title</h3>
                    <p className='desc'>I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. </p>
                </ListInfo>
            </ListItem>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn('home','articleList')
})
export default connect(mapState)(List);