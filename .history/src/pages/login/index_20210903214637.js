import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input
} from './style';
class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input></Input>
                    <Input></Input>
                </LoginBox>
            </LoginWrapper>
        )
    }

}
const mapState = (state) => ({

})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(Login);