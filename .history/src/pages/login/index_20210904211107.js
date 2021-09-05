import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import {actionCreators} from './store'

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='Account' innerRef={(input) => { this.account = input }}></Input>
                    <Input placeholder='Password' type='password' innerRef={(input) => { this.password = input }}></Input>
                    <Button onClick={()=>{this.props.login(this.account,this.password)}}>Login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }

}

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem) {
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
})
export default connect(null, mapDispatch)(Login);