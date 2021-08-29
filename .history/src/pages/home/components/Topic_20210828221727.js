import React, { Component } from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img
                     className='topic-pic'
                     src="http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg" />
                    Social news
                </TopicItem>
            </TopicWrapper>
            
        )
    }
}

const mapState=(state)=>({

})

export default connect(mapState,null)(Topic);