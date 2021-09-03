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
                        <img src={} art=''>
                        <span>+Follow</span>
                    </h3>
                    <p className='writerInfo'></p>
                    
                </WriterItem>
            </WriterWrapper>
        )
    }
}
export default Writer;