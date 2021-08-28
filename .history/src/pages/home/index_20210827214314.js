import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img src="https://upload-images.jianshu.io/upload_images/4185659-6c950f861973e9c6.png?imageMogr2/auto-orient/strip|imageView2/2/w/604/format/webp"/>
                </HomeLeft>
                <HomeRight>Right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;