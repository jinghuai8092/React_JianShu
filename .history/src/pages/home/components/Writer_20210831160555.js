import React, { Component } from 'react';
import {
    WriterItem,
    WriterWrapper
} from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterItem>
                    <h3 className='writerName'>
                        <span>+关注</span>
                    </h3>
                    <p className='writerInfo'></p>
                    
                </WriterItem>
            </WriterWrapper>
        )
    }
}
export default Writer;