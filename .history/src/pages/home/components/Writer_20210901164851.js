import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterItem,
    WriterWrapper
} from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {this.props.list.map((item)=>{
                    console.log(item)
                })}
                <div className='title'>
                    <h2 className='WriterTitle'>Recommended Author</h2>
                    <span className='WriterChange'><i ref={(icon) => { this.spinIcon = icon }} className='iconfont change'>&#xe606;</i>Change</span>
                </div>
                <ul className='listUl'>
                    <WriterItem>
                            <img className='imgAuthor' src='https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' art='' />
                            <span className='follow'>Follow</span>
                            <span className='title'>我也不知道</span>
                            <span className='info'>写了2107.8k字 · 34.4k喜欢</span>
                    </WriterItem>
                </ul>
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home','writerList'])
});

export default connect(mapState)(Writer);