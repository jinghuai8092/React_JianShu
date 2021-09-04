import React, { Component } from 'react';
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>'I wish we didn't have to do this': Alberta to offer $100 incentive to get vaccinated against COVID-19</Header>
                <Content>
                    <img src='https://i.cbc.ca/1.5773860.1606932633!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hinshaw-kenney.jpg'></img>
                </Content>
            </DetailWrapper>
        )
    }
}
export default Detail;