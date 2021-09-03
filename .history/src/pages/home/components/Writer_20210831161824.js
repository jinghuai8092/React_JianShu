import React, { Component } from 'react';
import {
    WriterItem,
    WriterWrapper
} from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <h2 className='WriterTitle'>Recommended Author</h2>
                <span className='WriterChange'><i ref={(icon)=>{this.spinIcon=icon}} className='iconfont change'>&#xe606;</i>Change</span>
                <WriterItem>
                    <h3 className='writerName'>
                        <img src='https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' art=''/>
                        <span>+Follow</span>
                    </h3>
                    <p className='writerInfo'></p>
                    
                </WriterItem>
            </WriterWrapper>
        )
    }
}
export default Writer;