import React, { Component } from 'react';
import {ListItem} from '../style';

class List extends Component {
    render() {
        return (
            <ListItem>
                <img className='pic' src="https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg"/>
                <ListInfo>
                    <h3>I am the Title</h3>
                    <p>I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. I am the Content. </p>
                </ListInfo>
            </ListItem>
        )
    }
}
export default List;