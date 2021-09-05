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
                    <Input placeholder='Account' ref={(input) => { this.account = input }}></Input>
                    <Input placeholder='Password' type='password' ref={(input) => { this.password = input }}></Input>
                    <Button onClick={()=>{this.props.login}}>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }

}

const mapDispatch = (dispatch) => ({
    login() {

    }
})
export default connect(null, mapDispatch)(Login);