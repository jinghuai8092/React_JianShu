import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox
} from './style';
class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox></LoginBox>
            </LoginWrapper>
        )
    }

}
const mapState = (state) => ({

})
const mapDispatch = (dispatch) => ({

})
export default connect(mapState, mapDispatch)(Login);