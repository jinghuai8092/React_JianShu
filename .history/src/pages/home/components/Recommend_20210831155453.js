import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
}
    from '../style';
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {this,props.list.map((item)=>{
                    <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                })}


            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','recommendLst'])
})

export default connect(mapState,null)(Recommend);