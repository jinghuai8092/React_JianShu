import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header></Header>
                <Content>
                
                </Content>
            </DetailWrapper>
        )
    }
}
const mapState=(state)=>({
    titel:state.get(['detail','title'])
})
export default connect(mapState,null)(Detail) ;