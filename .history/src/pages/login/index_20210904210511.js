import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='Account'></Input>
                    <Input placeholder='Password'></Input>
                    <Button onClick={this.props.login}>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }

}

const mapDispatch = (dispatch) => ({

})
export default connect(null, mapDispatch)(Login);